import { useQuery } from "@tanstack/react-query";
import { User } from "../../Domain/Models/User";
import { useAppServicesContainer } from "../../Services/AppServicesContainer";

export const useFetchUsers = () => {
  const { userRepository } = useAppServicesContainer()
  const { data, isLoading, isError, isSuccess } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => userRepository.getUsers(),
  });

  return {
    users: data,
    isFetchUsersLoading: isLoading,
    isFetchUsersSuccess: isSuccess,
    isFetchUsersError: isError,
  };
};
