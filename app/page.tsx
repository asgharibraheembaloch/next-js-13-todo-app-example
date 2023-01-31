//import { Inter } from "@next/font/google";
import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <AddNewTodo />
        <TodoList />
      </div>
    </main>
  );
}
