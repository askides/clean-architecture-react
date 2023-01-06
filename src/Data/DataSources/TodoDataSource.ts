import { Todo } from "../../Domain/Models/Todo";
import { Http } from "../../Services/Http";

export interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
  createTodo(todo: Todo): Promise<Todo>;
}

export class TodoDataSourceImpl implements TodoDataSource {
  async getTodos() {
    const res = await Http.get<Todo[]>("/todos");

    return res.data;
  }

  async createTodo(todo: Todo) {
    const res = await Http.post<Todo>("/todos", todo);

    return res.data;
  }
}
