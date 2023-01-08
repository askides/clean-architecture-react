import { TodoDataSource } from "../../../Data/DataSources/Todo/TodoDataSource";
import { Todo } from "../../../Domain/Models/Todo";

export class TodoLocalStorageDataSource implements TodoDataSource {
  STORAGE_KEY = "Todos";

  async getTodos() {
    return new Promise<Todo[]>((resolve) => {
      resolve(this.getItems());
    });
  }

  async createTodo(todo: Omit<Todo, "id">) {
    return new Promise<Todo>((resolve) => {
      const items = this.getItems();
      const data = { id: Date.now(), ...todo };
      this.setItems([...items, data]);
      resolve(data);
    });
  }

  async clearTodos() {
    return new Promise<void>((resolve) => {
      this.setItems([]);
      resolve();
    });
  }

  getItems() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw === null ? [] : JSON.parse(raw);
  }

  setItems(items: Todo[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }
}
