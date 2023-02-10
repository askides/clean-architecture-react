import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../Domain/Models/Todo";
import { useAppServicesContainer } from "../../Services/AppServicesContainer";
import { useLogger } from "../../Services/useLogger";
import { useNotification } from "../../Services/useNotification";

export const useCreateTodo = () => {
  const { todoRepository } = useAppServicesContainer()
  const logger = useLogger();
  const notify = useNotification();
  const queryClient = useQueryClient();

  const createTodo = useMutation({
    mutationFn: (todo: Omit<Todo, "id">) => todoRepository.createTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      notify.success("Created Correctly!");
    },
    onError: () => {
      logger.error("Something goes wrong..");
    },
  });

  return createTodo;
};
