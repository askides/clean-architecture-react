import { Todo } from "../Domain/Models/Todo";
import * as React from "react";
import { GetTodos } from "../Domain/UseCases/GetTodos";
import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";

export function useViewModel() {
  const [data, setData] = React.useState<Todo[]>([]);

  const getTodos = React.useCallback(async () => {
    setData(await GetTodos(new TodoRepositoryImpl(new TodoDataSourceImpl())));
  }, []);

  return {
    todos: data,
    getTodos,
  };
}

export function TodoList() {
  const { todos, getTodos } = useViewModel();

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <fieldset>
      <legend>Todo List</legend>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </fieldset>
  );
}
