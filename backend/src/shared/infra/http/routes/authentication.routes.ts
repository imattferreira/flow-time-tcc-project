import { Router } from "express"
import { AuthenticateAdminUserController } from "../../../../modules/accounts/useCases/authentication/authenticateAdminUser/AuthenticateAdminUserController";

const authenticationRouter = Router();

const authenticateAdminUserController = new AuthenticateAdminUserController();

authenticationRouter.post(
  '/auth',
  authenticateAdminUserController.handle,
);

export { authenticationRouter }
