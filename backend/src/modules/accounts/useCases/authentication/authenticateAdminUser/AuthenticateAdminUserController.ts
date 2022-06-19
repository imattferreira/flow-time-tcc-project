import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateAdminUserUseCase } from "./AuthenticateAdminUserUseCase";

export class AuthenticateAdminUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authenticateAdminUserUseCase = container.resolve(AuthenticateAdminUserUseCase);

    const { email, password } = req.body;

    const { name, token } = await authenticateAdminUserUseCase.execute(email, password);

    return res.status(200).json({ name, token });
  }
}
