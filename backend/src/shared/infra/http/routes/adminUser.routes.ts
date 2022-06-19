import { Router } from "express";

import { CreateAdminUserController } from "../../../../modules/accounts/useCases/admin/createAdminUser/CreateAdminUserController";

const adminUserRouter = Router();

const createAdminUserController = new CreateAdminUserController();

adminUserRouter.post(
  '/',
  createAdminUserController.handle,
)

export { adminUserRouter }
