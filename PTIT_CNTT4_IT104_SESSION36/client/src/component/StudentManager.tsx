import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../store/slices/userSlice";

export default function StudentManager() {
  const dispatch: any = useDispatch();

  const result = useSelector((state: any) => {
    console.log("Data", state);
    return state.user?.users || [];
  });

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Quản lý user</h1>
      <ul>
        {result.map((item: any, index: number) => (
          <li key={item.id || index}>
            {item.name}
            <button>xóa</button>
            <button>sửa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
