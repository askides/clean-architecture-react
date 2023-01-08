import { Todo } from "../../../Domain/Models/Todo";

export interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
  clearTodos(): Promise<void>;
  createTodo(todo: Omit<Todo, "id">): Promise<Todo>;
}
