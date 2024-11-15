// src/controllers/UserController.ts
import { injectable, inject } from "inversify";
import { IUserService } from "../interfaces/IUserService";

@injectable() // <--- Decorador necessário para classes injetáveis no Inversify
export class UserController {
  constructor(@inject("IUserService") private userService: IUserService) {}

  async getUser(req: any, res: any) {
    const userId = parseInt(req.params.id);
    const user = await this.userService.getUser(userId);
    res.json({ user });
  }
}
