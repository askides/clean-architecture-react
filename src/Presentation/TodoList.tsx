import { useFetchTodos } from "../Domain/UseCases/useFetchTodos";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoLocalStorageDataSource } from "../Data/DataSources/Todo/TodoLocalStorageDataSource";

export function TodoList() {
  const { todos, isFetchTodosLoading } = useFetchTodos(
    new TodoRepositoryImpl(new TodoLocalStorageDataSource())
  );

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
