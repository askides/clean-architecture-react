import { User } from "../Domain/Models/User";
import * as React from "react";
import { GetUsers } from "../Domain/UseCases/GetUsers";
import { UserRepositoryImpl } from "../Data/Repositories/UserRepositoryImpl";
import { UserDataSourceImpl } from "../Data/DataSources/UserDataSource";
import { withAsync } from "../Utils/withAsync";

type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

export function useViewModel() {
  const [data, setData] = React.useState<User[]>([]);
  const [status, setStatus] = React.useState<ApiStatus>("IDLE");

  const getUsers = React.useCallback(async () => {
    setStatus("PENDING");
    const { response, error } = await withAsync(() =>
      GetUsers(new UserRepositoryImpl(new UserDataSourceImpl()))
    );

    if (error) {
      setStatus("ERROR");
    } else if (response) {
      setData(response);
      setStatus("SUCCESS");
    }
  }, []);

  return {
    users: data,
    getUsers,
    status,
  };
}

export function UserList() {
  const { users, getUsers, status } = useViewModel();

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <fieldset>
      <legend>User List</legend>
      {status === "PENDING" ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}
