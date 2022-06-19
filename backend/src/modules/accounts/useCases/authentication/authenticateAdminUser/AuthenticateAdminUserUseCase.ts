import { inject, injectable } from "tsyringe";

import { IAdminUsersRepository } from "../../../../../modules/accounts/repositories/IAdminUsersRepository";
import { IHashProvider } from "../../../../../shared/containers/providers/hashProvider/IHashProvider";
import { ITokensProvider } from "../../../../../shared/containers/providers/tokensProvider/ITokensProvider";

interface IResponse {
  token: string;
  name: string;
}

@injectable()
export class AuthenticateAdminUserUseCase {
  constructor(
    @inject('AdminUsersRepository')
    private adminUsersRepository: IAdminUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('TokensProvider')
    private tokensProvider: ITokensProvider,
  ) {}
  
  async execute(email: string, password: string): Promise<IResponse> {
    const adminUserExists = await this.adminUsersRepository.findByEmail(email);

    if (!adminUserExists) {
      throw new Error('incorrect email or password');
    }

    const comparePassword = await this.hashProvider.compare(adminUserExists.password, password);

    if(!comparePassword) {
      throw new Error('incorrect email or password');
    }

    const passwordHash = await this.hashProvider.hash(password);

    await this.adminUsersRepository.update({ ...adminUserExists, password: passwordHash });

    const token = this.tokensProvider.create(adminUserExists.id);
    
    return {
      name: adminUserExists.name,
      token,
    }
  }
}
