import React, { useMemo } from 'react';

type User = {
  id: number;
  name: string;
  age: number;
};

const initial: User[] = [
  { id: 1, name: "Spring Onion", age: 19 },
  { id: 2, name: "Hikari", age: 21 },
];

export default function UserList() {
  const filteredUsers = useMemo(() => {
    return initial.filter(user => user.age > 18);
  }, []);

  return (
    <div>
      <h3>Danh sách người dùng trên 18 tuổi</h3>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} - {user.age} tuổi</li>
        ))}
      </ul>
    </div>
  );
}
