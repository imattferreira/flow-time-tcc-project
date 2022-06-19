import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const { id: adminId } = req.user;

    const { name, contract_init, rfid }: ICreateUserDTO = req.body;

    await createUserUseCase.execute({ name, contract_init, rfid }, adminId);

    return res.status(201).send();
  }
}
