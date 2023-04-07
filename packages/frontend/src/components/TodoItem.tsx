type TodoItemProps = {
  done: boolean;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onXClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={props.done} onChange={props.onChange} />{" "}
        {props.title}
      </label>{" "}
      <button onClick={props.onXClick}>X</button>
    </div>
  );
};
