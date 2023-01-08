import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { useCreateTodo } from "../Domain/UseCases/useCreateTodo";

export function CreateTodoForm() {
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
      <legend>Create New</legend>
      <p>This will create a new Todo with fixed data</p>

      <button type="button" onClick={onClick}>
        {createTodo.isLoading ? "Creating.." : "Create New"}
      </button>
    </fieldset>
  );
}
