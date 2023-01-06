import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";

export async function GetTodos(repository: TodoRepositoryImpl) {
  const todos = await repository.getTodos();
  return todos.slice(0, 10);
}
