import { useFetchUsers } from "../../Domain/UseCases/useFetchUsers";

export function UserList() {
  const { users, isFetchUsersLoading, isFetchUsersSuccess } = useFetchUsers();

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
