import { CreateTodo } from "../Domain/UseCases/CreateTodo";
import { CreateTodoForm } from "../Presentation/CreateTodoForm";
import { TodoList } from "../Presentation/TodoList";
import { Layout } from "../UI/Layout";

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
