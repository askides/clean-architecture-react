import { CreateTodoForm } from "../../Todo/CreateTodoForm";
import { TodoList } from "../../Todo/TodoList";
import { Layout } from "../Components/Layout";

export function TodosPage() {
  return (
    <Layout>
      <main>
        <h1>Todo List</h1>
        <TodoList />
        <CreateTodoForm />
      </main>
    </Layout>
  );
}
