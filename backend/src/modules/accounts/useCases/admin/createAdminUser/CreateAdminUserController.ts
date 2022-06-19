import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateAdminUserDTO } from "src/modules/accounts/dtos/ICreateAdminUserDTO";
import { CreateAdminUserUseCase } from "./CreateAdminUserUseCase";

export class CreateAdminUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createAdminUserUseCase = container.resolve(CreateAdminUserUseCase);

    const {
      name,
      email,
      password
    }: ICreateAdminUserDTO = req.body;

    await createAdminUserUseCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).send();
  }
}
