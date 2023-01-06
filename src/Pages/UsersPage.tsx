import { Link } from "react-router-dom";
import { UserList } from "../Presentation/UserList";
import { Layout } from "../UI/Layout";

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
