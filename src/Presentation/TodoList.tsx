import { Todo } from "../Domain/Models/Todo";
import * as React from "react";
import { GetTodos } from "../Domain/UseCases/GetTodos";
import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { CreateTodo } from "../Domain/UseCases/CreateTodo";

// TODO: Conviene tenere insieme i due useCase implementati?
export function useViewModel() {
  const [data, setData] = React.useState<Todo[]>([]);

  const getTodos = React.useCallback(async () => {
    setData(await GetTodos(new TodoRepositoryImpl(new TodoDataSourceImpl())));
  }, []);

  const createTodo = React.useCallback(async (todo: Todo) => {
    return await CreateTodo(
      new TodoRepositoryImpl(new TodoDataSourceImpl()),
      todo
    );
  }, []);

  return {
    todos: data,
    getTodos,
    createTodo,
  };
}

export function TodoList() {
  const { todos, getTodos, createTodo } = useViewModel();

  React.useEffect(() => {
    getTodos();
  }, []);

  // TODO: How to handle different parameters for APIs?
  const onClick = () => {
    createTodo({
      title: "This is a nice Todo",
      completed: false,
      userId: 1,
    });
  };

  return (
    <fieldset>
      <legend>Todo List</legend>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button type="button" onClick={onClick}>
        Create New
      </button>
    </fieldset>
  );
}
