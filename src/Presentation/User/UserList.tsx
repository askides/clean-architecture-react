import { UserRepositoryImpl } from "../../Data/Repositories/UserRepositoryImpl";
import { UserDataSourceImpl } from "../../Data/DataSources/User/UserAPIDataSource";
import { useFetchUsers } from "../../Domain/UseCases/useFetchUsers";

export function UserList() {
  const { users, isFetchUsersLoading, isFetchUsersSuccess } = useFetchUsers(
    new UserRepositoryImpl(new UserDataSourceImpl())
  );

  return (
    <fieldset>
      <legend>User List</legend>
      {isFetchUsersLoading && <div>Loading...</div>}
      {isFetchUsersSuccess && (
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
