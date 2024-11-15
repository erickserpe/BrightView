"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
// src/inversify.config.ts
const inversify_1 = require("inversify");
const UserService_1 = require("./services/UserService");
const UserController_1 = require("./controllers/UserController"); // Importe o UserController
require("reflect-metadata"); // Necessário para o inversify funcionar com TypeScript
const container = new inversify_1.Container();
exports.container = container;
container.bind("IUserService").to(UserService_1.UserService);
container.bind(UserController_1.UserController).toSelf(); // Registre o UserController
//# sourceMappingURL=inversify.config.js.map