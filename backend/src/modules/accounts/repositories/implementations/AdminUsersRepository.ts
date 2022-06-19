import { getRepository, Repository } from "typeorm";
import { ICreateAdminUserDTO } from "../../dtos/ICreateAdminUserDTO";
import { AdminUser } from "../../entities/AdminUser";
import { IAdminUsersRepository } from "../IAdminUsersRepository";

export class AdminUsersRepository implements IAdminUsersRepository {
  private repository: Repository<AdminUser>;

  constructor() {
    this.repository = getRepository(AdminUser);
  }
  
  async create({ name, email, password }: ICreateAdminUserDTO): Promise<void> {
    const adminUser = this.repository.create({
      name,
      email,
      password
    });

    await this.repository.save(adminUser);
  }

  async findById(id: string): Promise<AdminUser> {
    return this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<AdminUser> {
    return this.repository.findOne({ where: { email } });
  }

  async update(data: AdminUser): Promise<void> {
    await this.repository.save(data);
  }
}
