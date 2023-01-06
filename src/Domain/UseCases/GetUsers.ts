import { UserRepositoryImpl } from "../../Data/Repositories/UserRepositoryImpl";
import { UserRepository } from "../../Domain/Repositories/UserRepository";

export async function GetUsers(repository: UserRepositoryImpl) {
  return repository.getUsers();
}
