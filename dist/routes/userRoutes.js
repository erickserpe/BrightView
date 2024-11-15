"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const inversify_config_1 = require("../inversify.config");
const router = (0, express_1.Router)();
exports.router = router;
const userController = inversify_config_1.container.get(UserController_1.UserController);
router.get("/user/:id", (req, res) => userController.getUser(req, res));
//# sourceMappingURL=userRoutes.js.map