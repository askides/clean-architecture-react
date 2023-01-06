import { UserDataSource } from "../../Data/DataSources/UserDataSource";
import { User } from "../../Domain/Models/User";
import { UserRepository } from "../../Domain/Repositories/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  datasource: UserDataSource;

  constructor(datasource: UserDataSource) {
    this.datasource = datasource;
  }

  async getUsers(): Promise<User[]> {
    return await this.datasource.getUsers();
  }
}
