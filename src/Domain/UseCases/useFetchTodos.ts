import { useQuery } from "@tanstack/react-query";
import { Todo } from "../../Domain/Models/Todo";
import { useAppServicesContainer } from "../../Services/AppServicesContainer";

export const useFetchTodos = () => {
  const { todoRepository } = useAppServicesContainer()
  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => todoRepository.getTodos(),
  });

  return {
    todos: data?.slice(-10),
    isFetchTodosLoading: isLoading,
  };
};
