// component/PTIT_CNTT4_IT104_Session32_Exercises02/store/userReducer.ts

export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: User[] = [
  {
    id: 1,
    userName: "Hành Lá",
    gender: "Nam",
    dateBirth: "888",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Dưa Hấu",
    gender: "Nữ",
    dateBirth: "111",
    address: "N",
  },
];

const userReducer = (state = initialState, action: any): User[] => {
  switch (action.type) {
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    default:
      return state;
  }
};

export default userReducer;
