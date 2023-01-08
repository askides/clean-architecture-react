import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { useFetchTodos } from "../Domain/UseCases/useFetchTodos";
import { useCreateTodo } from "../Domain/UseCases/useCreateTodo";

export function TodoList() {
  const { todos, isFetchTodosLoading } = useFetchTodos(
    new TodoRepositoryImpl(new TodoDataSourceImpl())
  );

  const createTodo = useCreateTodo(
    new TodoRepositoryImpl(new TodoDataSourceImpl())
  );

  const onClick = async () => {
    createTodo.mutate(
      {
        title: "Giggi",
        completed: false,
        userId: 3,
      },
      {
        onSuccess: (res) => console.log("Creato", res),
      }
    );
  };

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

      <button type="button" onClick={onClick}>
        {createTodo.isLoading ? "Creating.." : "Create New"}
      </button>
    </fieldset>
  );
}
