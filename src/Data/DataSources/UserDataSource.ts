import axios from "axios";
import { User } from "../../Domain/Models/User";

export interface UserDataSource {
  getUsers(): Promise<User[]>;
}

export class UserDataSourceImpl implements UserDataSource {
  async getUsers(): Promise<User[]> {
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return res.data;
  }
}
