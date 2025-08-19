import React from 'react';

export default function FormatName() {

  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  function formatName(user: { firstName: string; lastName: string }): string {
    return `${user.firstName} ${user.lastName}`;
  }

  const fullName = formatName(user);

  return (
    <div>
      <h1>Họ tên đầy đủ:</h1>
      <p>{fullName}</p>
    </div>
  );
}
