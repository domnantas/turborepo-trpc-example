import { api } from "@/utils/api";
import { useState } from "react";

export const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const ctx = api.useContext();
  const { mutate: addTodoMutate } = api.todo.create.useMutation({
    onSuccess: () => {
      ctx.todo.getAll.invalidate();
      setTodoTitle("");
    },
  });

  const addTodo = () => {
    addTodoMutate({ title: todoTitle });
  };

  return (
    <>
      <h3>Add todos</h3>
      <input
        type="text"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
      />
      <button onClick={addTodo}>Submit</button>
    </>
  );
};
