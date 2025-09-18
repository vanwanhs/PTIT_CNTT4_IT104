const initialState = {
  id: "123",
  userName: "Nguyen Van A",
  gender: "Nam",
  dateBirth: "2000-01-01",
  address: "Hà Nội",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
