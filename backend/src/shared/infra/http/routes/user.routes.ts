import { Router } from "express";
import { ListUsersController } from "../../../../modules/accounts/useCases/listUsers/ListUsersController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRouter.post('/', ensureAuthenticated, createUserController.handle);
userRouter.get('/', ensureAuthenticated, listUsersController.handle);

export { userRouter }
