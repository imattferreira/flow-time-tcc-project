import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const { id: adminId } = req.user;

    const users = await listUsersUseCase.execute(adminId);

    return res.status(200).json(users);
  }
}
