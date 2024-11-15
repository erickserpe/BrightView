import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { container } from "../inversify.config";

const router = Router();
const userController = container.get(UserController);

router.get("/user/:id", (req, res) => userController.getUser(req, res));

export { router };
