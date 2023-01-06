import { useState } from "react";
import { TodoList } from "./Presentation/TodoList";
import { UserList } from "./Presentation/UserList";

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
