import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { Todo } from "../../Domain/Models/Todo";

export async function CreateTodo(repository: TodoRepositoryImpl, todo: Todo) {
  return await repository.createTodo(todo);
}
