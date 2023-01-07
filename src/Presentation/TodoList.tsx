import * as React from "react";
import { Todo } from "../Domain/Models/Todo";
import { GetTodos } from "../Domain/UseCases/GetTodos";
import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { CreateTodo } from "../Domain/UseCases/CreateTodo";
import { useApi } from "../Services/useApi";

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
  // const { todos, getTodos, createTodo } = useViewModel();

  const {
    data: todos,
    exec: initFetchTodos,
    isPending: isFetchTodosPending,
  } = useApi(() => GetTodos(new TodoRepositoryImpl(new TodoDataSourceImpl())));

  const {
    data: createdTodo,
    exec: createTodo,
    isPending: isCreateTodoPending,
  } = useApi((todo: Omit<Todo, "id">) =>
    CreateTodo(new TodoRepositoryImpl(new TodoDataSourceImpl()), todo)
  );

  React.useEffect(() => {
    initFetchTodos();
  }, []);

  // TODO: How to handle different parameters for APIs?
  const onClick = async () => {
    console.log("createdTodoBefore", createdTodo);
    const res = await createTodo<Omit<Todo, "id">>({
      title: "This is a nice Todo2",
      completed: false,
      userId: 1,
    });

    console.log("Res", res);
    console.log("createdTodoAfter", createdTodo);
  };

  return (
    <fieldset>
      <legend>Todo List</legend>
      {isFetchTodosPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}

      <button type="button" onClick={onClick}>
        {isCreateTodoPending ? "Creating.." : "Create New"}
      </button>
    </fieldset>
  );
}
