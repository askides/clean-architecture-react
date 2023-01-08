import { User } from "../../Domain/Models/User";
import { useQuery } from "@tanstack/react-query";
import { UserRepositoryImpl } from "../../Data/Repositories/UserRepositoryImpl";

export const useFetchUsers = (repository: UserRepositoryImpl) => {
  const { data, isLoading, isError, isSuccess } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => repository.getUsers(),
  });

  return {
    users: data,
    isFetchUsersLoading: isLoading,
    isFetchUsersSuccess: isSuccess,
    isFetchUsersError: isError,
  };
};
