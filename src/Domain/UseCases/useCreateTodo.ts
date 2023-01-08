import { Todo } from "../../Domain/Models/Todo";
import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "../../Services/useNotification";

export const useCreateTodo = (repository: TodoRepositoryImpl) => {
  const notify = useNotification();
  const queryClient = useQueryClient();
  const createTodo = useMutation({
    mutationFn: (todo: Omit<Todo, "id">) => repository.createTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      notify.success("Created Correctly!");
    },
  });

  return createTodo;
};
