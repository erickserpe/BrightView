// src/inversify.config.ts
import { Container } from "inversify";
import { IUserService } from "./interfaces/IUserService";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/UserController"; // Importe o UserController
import "reflect-metadata"; // Necessário para o inversify funcionar com TypeScript

const container = new Container();

container.bind<IUserService>("IUserService").to(UserService);
container.bind<UserController>(UserController).toSelf(); // Registre o UserController

export { container };
