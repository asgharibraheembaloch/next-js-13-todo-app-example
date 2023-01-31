"use client";

import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

async function update(id: string, isDone: boolean, refresh:Function) {
  await fetch("/api/todo/update", {
    method: "post",
    body: JSON.stringify({ id, isDone }),
  });
  refresh()
}

async function deleteTodo(id:string, refresh:Function) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: "DELETE",
      });
      refresh()    
}

export default function Todo({ todo }: any) {
    const router = useRouter();
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      {todo.name}
      <button onClick={()=>deleteTodo(todo.id, router.refresh)}>Delete</button>
    </div>
  );
}
