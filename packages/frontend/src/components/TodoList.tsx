import { api } from "@/utils/api";
import { TodoItem } from "./TodoItem";
import { RouterInputs } from "backend";

export const TodoList = () => {
  const { data: allTodos } = api.todo.getAll.useQuery();

  const ctx = api.useContext();
  const { mutate: updateDoneMutate } = api.todo.updateDone.useMutation({
    onSuccess: () => {
      ctx.todo.getAll.invalidate();
    },
  });

  type ToggleTodoInput = RouterInputs["todo"]["updateDone"];

  const toggleTodo = ({ id, done }: ToggleTodoInput) => {
    updateDoneMutate({ id, done });
  };

  const { mutate: deleteMutate } = api.todo.delete.useMutation({
    onSuccess: () => {
      ctx.todo.getAll.invalidate();
    },
  });

  type DeleteTodoInput = RouterInputs["todo"]["delete"];

  const deleteTodo = ({ id }: DeleteTodoInput) => {
    deleteMutate({ id });
  };

  if (!allTodos?.length) return <h2>No todos</h2>;

  return (
    <div style={{ display: "grid" }}>
      {allTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          title={todo.title}
          onChange={() => toggleTodo({ id: todo.id, done: !todo.done })}
          onXClick={() => deleteTodo({ id: todo.id })}
        />
      ))}
    </div>
  );
};
