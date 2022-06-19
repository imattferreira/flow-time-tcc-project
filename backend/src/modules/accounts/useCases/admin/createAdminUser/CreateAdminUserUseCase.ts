import { inject, injectable } from "tsyringe";

import { IHashProvider } from "../../../../../shared/containers/providers/hashProvider/IHashProvider";
import { ICreateAdminUserDTO } from "../../../dtos/ICreateAdminUserDTO";
import { IAdminUsersRepository } from "../../../repositories/IAdminUsersRepository";

@injectable()
export class CreateAdminUserUseCase {
  constructor(
    @inject('AdminUsersRepository')
    private adminUsersRepository: IAdminUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: ICreateAdminUserDTO): Promise<void> {
    const userExists = await this.adminUsersRepository.findByEmail(email);

    if (userExists) {
      throw new Error('admin user already exists');
    }

    const passwordHash = await this.hashProvider.hash(password);

    await this.adminUsersRepository.create({
      name,
      email,
      password: passwordHash
    })
  }
}
