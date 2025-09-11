import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "./Data";
export default function ProductDetail() {
 const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <p>Không tìm thấy công việc!</p>;
  }

  return (
    <div>
      <h1>Chi tiết công việc</h1>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}

