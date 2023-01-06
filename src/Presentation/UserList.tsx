import { User } from "../Domain/Models/User";
import * as React from "react";
import { GetUsers } from "../Domain/UseCases/GetUsers";
import { UserRepositoryImpl } from "../Data/Repositories/UserRepositoryImpl";
import { UserDataSourceImpl } from "../Data/DataSources/UserDataSource";

export function useViewModel() {
  const [data, setData] = React.useState<User[]>([]);

  const getUsers = React.useCallback(async () => {
    setData(await GetUsers(new UserRepositoryImpl(new UserDataSourceImpl())));
  }, []);

  return {
    users: data,
    getUsers,
  };
}

export function UserList() {
  const { users, getUsers } = useViewModel();

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <fieldset>
      <legend>User List</legend>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </fieldset>
  );
}
