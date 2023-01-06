import { UserRepositoryImpl } from "../../Data/Repositories/UserRepositoryImpl";

export async function GetUsers(repository: UserRepositoryImpl) {
  return repository.getUsers();
}
