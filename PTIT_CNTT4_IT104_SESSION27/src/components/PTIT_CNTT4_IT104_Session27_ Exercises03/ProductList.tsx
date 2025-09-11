import React from 'react'
import { Link } from "react-router-dom";
import { tasks } from "./Data";
export default function ProductList() {
return (
    <div>
      <h1>Danh sách công việc</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

