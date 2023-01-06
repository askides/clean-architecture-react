import { User } from "../../Domain/Models/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;
}
