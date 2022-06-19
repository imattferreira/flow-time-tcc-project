import { container } from "tsyringe";

import { IAdminUsersRepository } from "../../modules/accounts/repositories/IAdminUsersRepository";
import { AdminUsersRepository } from "../../modules/accounts/repositories/implementations/AdminUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import './providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAdminUsersRepository>(
  'AdminUsersRepository',
  AdminUsersRepository,
);
