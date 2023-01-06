import axios from "axios";
import { UserDTO } from "../../Data/DTOs/UserDTO";
import { User } from "../../Domain/Models/User";

export interface UserDataSource {
  getUsers(): Promise<User[]>;
}

export class UserDataSourceImpl implements UserDataSource {
  async getUsers(): Promise<User[]> {
    const res = await axios.get<UserDTO[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return res.data.map((x) => this.mapToModel(x));
  }

  mapToModel(dto: UserDTO): User {
    return {
      id: dto.id,
      name: dto.name,
      username: dto.username,
      email: dto.email,
    };
  }
}
