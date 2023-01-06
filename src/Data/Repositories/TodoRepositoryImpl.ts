import { TodoDataSource } from "../../Data/DataSources/TodoDataSource";
import { Todo } from "../../Domain/Models/Todo";
import { TodoRepository } from "../../Domain/Repositories/TodoRepository";

export class TodoRepositoryImpl implements TodoRepository {
  datasource: TodoDataSource;

  constructor(datasource: TodoDataSource) {
    this.datasource = datasource;
  }

  async getTodos(): Promise<Todo[]> {
    return await this.datasource.getTodos();
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return this.datasource.createTodo(todo);
  }
}
