import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const users = [
  { name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
  { name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
];

export default function UserTable() {
  return (
    <div style={{
      width: '100vw',   
      minHeight: '100vh',
      padding: '40px',
      boxSizing: 'border-box',
    }}>
      <table style={{
        borderCollapse: 'separate',
        borderSpacing: '0 15px',
        width: '100%',      
        textAlign: 'center',
      }}>
        <TableHeader />
        <tbody>
          {users.map((user, index) => (
            <TableRow key={index} index={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
