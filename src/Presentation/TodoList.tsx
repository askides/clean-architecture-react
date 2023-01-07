import { Todo } from "../Domain/Models/Todo";
import { GetTodos } from "../Domain/UseCases/GetTodos";
import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { useQuery } from "@tanstack/react-query";
import { Http } from "../Services/Http";

// Repository
const useTodosQuery = () => {
  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => Http.get<Todo[]>("/todos").then((res) => res.data),
    // queryFn: () => GetTodos(new TodoRepositoryImpl(new TodoDataSourceImpl())),
  });

  return { data, isLoading };
};

// UseCase
const useDisplayTodos = () => {
  const { data, isLoading } = useTodosQuery();

  return {
    todos: data,
    isFetchTodosLoading: isLoading,
  };
};

export function TodoList() {
  const { todos, isFetchTodosLoading } = useDisplayTodos();

  return (
    <fieldset>
      <legend>Todo List</legend>

      {isFetchTodosLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}
