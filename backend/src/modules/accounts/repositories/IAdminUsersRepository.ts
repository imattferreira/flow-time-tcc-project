import { ICreateAdminUserDTO } from "../dtos/ICreateAdminUserDTO";
import { AdminUser } from "../entities/AdminUser";

export interface IAdminUsersRepository {
  create(data: ICreateAdminUserDTO): Promise<void>;
  findById(id: string): Promise<AdminUser>;
  findByEmail(email: string): Promise<AdminUser>;
  update(data: AdminUser): Promise<void>;
}
