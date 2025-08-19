type User = {
  name: string;
  dob: string;
  gender: string;
  address: string;
};

type Props = {
  index: number;
  user: User;
};

export default function TableRow({ index, user }: Props) {
  return (
    <tr
      style={{
        backgroundColor: '#ffffff',            
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
        borderRadius: '8px',                   
        overflow: 'hidden',         
      }}
    >
      <td style={{ padding: '12px 20px' }}>{index + 1}</td>
      <td style={{ padding: '12px 20px' }}>{user.name}</td>
      <td style={{ padding: '12px 20px' }}>{user.dob}</td>
      <td style={{ padding: '12px 20px' }}>{user.gender}</td>
      <td style={{ padding: '12px 20px' }}>{user.address}</td>
      <td style={{ padding: '12px 20px' }}>
        <button style={{ marginRight: '10px' }}>Sửa</button>
        <button style={{ backgroundColor: 'red', color: 'white' }}>Xóa</button>
      </td>
    </tr>
  );
}
