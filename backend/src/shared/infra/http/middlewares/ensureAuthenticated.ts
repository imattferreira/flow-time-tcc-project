import { NextFunction, Request, Response } from "express";
import { AdminUsersRepository } from "../../../../modules/accounts/repositories/implementations/AdminUsersRepository";
import { TokensProvider } from "../../../../shared/containers/providers/tokensProvider/TokensProvider";

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { authorization } = req.headers;

    if (!authorization || authorization === 'Bearer undefined') {
      throw new Error('authorization not found');
    }

    const [, token] = authorization.split(' ');

    const tokensProvider = new TokensProvider();
    const adminUsersRepository = new AdminUsersRepository();

    const adminUserId = tokensProvider.decode(token);

    const adminUserExists = await adminUsersRepository.findById(adminUserId);

    if (!adminUserExists) {
      throw new Error('admin user not found');
    }

    req.user = {
      id: adminUserExists.id,
    }

    return next();
  } catch (err) {
    return next(err);
  }
}
