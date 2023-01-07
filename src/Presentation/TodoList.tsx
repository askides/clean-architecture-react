import { Todo } from "../Domain/Models/Todo";
import { GetTodos } from "../Domain/UseCases/GetTodos";
import { TodoRepositoryImpl } from "../Data/Repositories/TodoRepositoryImpl";
import { TodoDataSourceImpl } from "../Data/DataSources/TodoDataSource";
import { CreateTodo } from "../Domain/UseCases/CreateTodo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNotification } from "../Services/useNotification";

export function TodoList() {
  const notify = useNotification();

  const fetchTodosQuery = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => GetTodos(new TodoRepositoryImpl(new TodoDataSourceImpl())),
  });

  const createTodoMutation = useMutation((todo: Omit<Todo, "id">) =>
    CreateTodo(new TodoRepositoryImpl(new TodoDataSourceImpl()), todo)
  );

  const onClick = async () => {
    const fakeBody = {
      title: "Dio Bonino",
      completed: false,
      userId: 2,
    };

    createTodoMutation.mutate(fakeBody, {
      onSuccess: () => notify.success("Created Correctly (Fake)"),
    });
  };

  return (
    <fieldset>
      <legend>Todo List</legend>

      {fetchTodosQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {fetchTodosQuery.data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}

      <button type="button" onClick={onClick}>
        {createTodoMutation.isLoading ? "Creating.." : "Create New"}
      </button>
    </fieldset>
  );
}
