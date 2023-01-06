import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { Todo } from "../../Domain/Models/Todo";

// TODO: How to handle Notifications?
export async function CreateTodo(repository: TodoRepositoryImpl, todo: Todo) {
  const res = await repository.createTodo(todo);
  console.log("Success!");
  return res;
}
