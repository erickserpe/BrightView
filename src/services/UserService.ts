import { IUserService } from "../interfaces/IUserService";
import { User } from "../models/User";

export class UserService implements IUserService {
  async getUser(id: number): Promise<User> {
    // Simulação de busca de usuário
    return new User(id, "Nome Exemplo");
  }
}
