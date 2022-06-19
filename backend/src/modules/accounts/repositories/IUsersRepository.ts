import { ICreateUserToDbDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserToDbDTO): Promise<void>;
  findByRfid(rfid: string): Promise<User>;
  findByAdminId(adminId: string): Promise<User[]>;
  findAll(): Promise<User[]>;
}
