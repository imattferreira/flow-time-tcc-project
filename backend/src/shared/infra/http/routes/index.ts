import { Router } from "express";
import { adminUserRouter } from "./adminUser.routes";
import { authenticationRouter } from "./authentication.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.use('/', authenticationRouter);
router.use('/users', userRouter);
router.use('/admin', adminUserRouter);

export default router;
