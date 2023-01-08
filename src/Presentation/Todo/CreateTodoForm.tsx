import * as React from "react";
import { useCreateTodo } from "../../Domain/UseCases/useCreateTodo";
import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { TodoLocalStorageDataSource } from "../../Data/DataSources/Todo/TodoLocalStorageDataSource";
import { useNotification } from "../../Services/useNotification";
import { useClearTodos } from "../../Domain/UseCases/useClearTodos";

export function CreateTodoForm() {
  const notify = useNotification();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const createTodo = useCreateTodo(
    new TodoRepositoryImpl(new TodoLocalStorageDataSource())
  );

  const clearTodos = useClearTodos(
    new TodoRepositoryImpl(new TodoLocalStorageDataSource())
  );

  const handleCreate = async () => {
    const title = inputRef.current?.value;

    if (!title) {
      notify.error("Title is required.");
      return;
    }

    const baseData = { completed: false, userId: 1 };

    createTodo.mutate(
      { ...baseData, title },
      {
        onSuccess: () => {
          formRef.current?.reset();
        },
      }
    );
  };

  const handleClear = () => {
    clearTodos.mutate();
  };

  return (
    <fieldset>
      <legend>Create New</legend>
      <form ref={formRef}>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={handleCreate}>
          {createTodo.isLoading ? "Creating.." : "Create New"}
        </button>
        <button type="button" onClick={handleClear}>
          {createTodo.isLoading ? "Creating.." : "Clear List"}
        </button>
      </form>
    </fieldset>
  );
}
