import { TodoDataSource } from "../../Data/DataSources/Todo/TodoDataSource";
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

  async createTodo(todo: Omit<Todo, "id">): Promise<Todo> {
    return this.datasource.createTodo(todo);
  }

  async clearTodos(): Promise<void> {
    return await this.datasource.clearTodos();
  }
}
