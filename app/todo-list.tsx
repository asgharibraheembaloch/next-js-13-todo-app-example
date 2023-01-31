import Todo from "./todo";

const getTodos = async () => {
  let todo = await fetch("http://localhost:3001/api/todo/list");
  return todo.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: any) => {
          return <li style={{ padding: "5px 0" }}>
            <Todo todo={t} />
          </li>;
        })}
      </ul>
    </div>
  );
}
