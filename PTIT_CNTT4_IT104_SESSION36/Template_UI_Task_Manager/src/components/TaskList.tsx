import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../store/slice/taskSlice";
import { CircularProgress } from "@mui/material";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state: any) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-40">
        <CircularProgress />
        <span className="mt-3 text-gray-600">Đang tải dữ liệu...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40 text-red-500">
        Lỗi tải dữ liệu: {error}
      </div>
    );
  }
};

export default TaskList;
