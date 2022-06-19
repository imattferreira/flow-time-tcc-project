import { getRepository, Repository } from "typeorm";
import { ICreateUserToDbDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  
  async create({ name, contract_init, rfid, admin_id }: ICreateUserToDbDTO): Promise<void> {
    const user = this.repository.create({
      name,
      contract_init,
      rfid,
      admin_id
    });

    await this.repository.save(user);
  }

  async findByRfid(rfid: string): Promise<User> {
    return this.repository.findOne({
      where: {
        rfid
      }
    })
  }

  findByAdminId(adminId: string): Promise<User[]> {
    return this.repository.find({
      where: { adminId }
    });
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }
}
