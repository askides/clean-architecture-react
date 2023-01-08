import { useFetchTodos } from "../../Domain/UseCases/useFetchTodos";
import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { TodoLocalStorageDataSource } from "../../Data/DataSources/Todo/TodoLocalStorageDataSource";

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
        <>
          {todos.length === 0 ? (
            <div>No available Todos.</div>
          ) : (
            <ul>
              {todos?.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </fieldset>
  );
}
