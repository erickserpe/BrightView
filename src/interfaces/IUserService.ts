import { User } from "../models/User";

export interface IUserService {
  getUser(id: number): Promise<User>;
}
