import { Todo } from "../../Domain/Models/Todo";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  createTodo(todo: Omit<Todo, "id">): Promise<Todo>;
}
