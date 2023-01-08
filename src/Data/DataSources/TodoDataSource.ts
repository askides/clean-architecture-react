import { Todo } from "../../Domain/Models/Todo";
import { Http } from "../../Services/Http";

export interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
  createTodo(todo: Omit<Todo, "id">): Promise<Todo>;
}

export class TodoDataSourceImpl implements TodoDataSource {
  async getTodos() {
    const res = await Http.get<Todo[]>("/todos");

    return res.data;
  }

  async createTodo(todo: Omit<Todo, "id">) {
    const res = await Http.post<Todo>("/todos", todo);

    return res.data;
  }
}

const data: Todo[] = [
  {
    id: 1,
    title: "A nice Todo",
    completed: false,
    userId: 2,
  },
];

export class TodoInMemoryDataSourceImpl implements TodoDataSource {
  async getTodos() {
    console.log("Called GetTodos", data);
    return new Promise<Todo[]>((resolve) => resolve(data));
  }

  async createTodo(todo: Omit<Todo, "id">) {
    return new Promise<Todo>((resolve) => {
      const id = Date.now();
      const newTodo = {
        id,
        title: "The NICE Todo",
        completed: false,
        userId: 1,
      };
      data.push(newTodo);
      resolve(newTodo);
    });
  }
}
