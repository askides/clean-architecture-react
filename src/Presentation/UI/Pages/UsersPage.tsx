import { UserList } from "../../User/UserList";
import { Layout } from "../Components/Layout";

export function UsersPage() {
  return (
    <Layout>
      <main>
        <h1>User List</h1>
        <UserList />
      </main>
    </Layout>
  );
}
