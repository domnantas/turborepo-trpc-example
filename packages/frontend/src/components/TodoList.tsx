import { api } from "@/utils/api";

export const TodoList = () => {
  const { data: allTodos } = api.todo.getAll.useQuery();

  if (!allTodos?.length) return <h1>No todos</h1>;
};
