import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/containers/providers/DateProvider/IDateProvider";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IAdminUsersRepository } from "../../repositories/IAdminUsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('AdminUsersRepository')
    private adminUsersRepository: IAdminUsersRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ name, contract_init, rfid }: ICreateUserDTO, adminId: string): Promise<void> {
    const rfidExists = await this.usersRepository.findByRfid(rfid);

    if (rfidExists) {
      throw new Error('rfid already exists');
    }

    const adminUserExists = await this.adminUsersRepository.findById(adminId);

    if (!adminUserExists) {
      throw new Error('admin user not found');
    }

    const contract_init_parsed_to_date = this.dateProvider.parseDate(contract_init);

    await this.usersRepository.create({
      name,
      rfid,
      contract_init: contract_init_parsed_to_date,
      admin_id: adminId,
    })
  }
}
