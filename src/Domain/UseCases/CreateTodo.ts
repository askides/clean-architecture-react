import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { Todo } from "../../Domain/Models/Todo";
import { Notification } from "../../Services/Notification";

export async function CreateTodo(repository: TodoRepositoryImpl, todo: Todo) {
  try {
    const res = await repository.createTodo(todo);
    Notification.error("Successfully Created!");
    return res;
  } catch (err) {
    Notification.success("Successfully Created!");
  }
}
