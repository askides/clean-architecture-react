import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppServicesContainer } from "../../Services/AppServicesContainer";
import { useNotification } from "../../Services/useNotification";

export const useClearTodos = () => {
  const { todoRepository } = useAppServicesContainer()
  const notify = useNotification();
  const queryClient = useQueryClient();
  const clearTodos = useMutation({
    mutationFn: () => todoRepository.clearTodos(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      notify.success("Cleared Correctly!");
    },
  });

  return clearTodos;
};
