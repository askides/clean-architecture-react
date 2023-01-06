import { useApi } from "../Services/useApi";
import { GetUsers } from "../Domain/UseCases/GetUsers";
import { UserRepositoryImpl } from "../Data/Repositories/UserRepositoryImpl";
import { UserDataSourceImpl } from "../Data/DataSources/UserDataSource";

export function UserList() {
  // TODO: Check if it works correctly.
  const {
    data: users,
    isPending,
    isSuccess,
    isError,
  } = useApi(() => GetUsers(new UserRepositoryImpl(new UserDataSourceImpl())));

  return (
    <fieldset>
      <legend>User List</legend>
      {isPending && <div>Loading...</div>}
      {isError && <div>Whoops... something goes wrong.</div>}
      {isSuccess && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}
