import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  //status: 'idle',
};
/*
createSlice란 Reducer 초기값을 하나의 State,action을 전달받고(dispatch) from Store, 
해당 정보에 따라 맞는 값 return 
 */

export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    login: (state, action) => {
      state.user = action.payload; //App.js useEffect 안에 dispatch 받은 값이 action.payload로 들어감 
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

console.log(userSlice);
 
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user; //App.js에서 user에 useDispatch를 통해 받은 payload의 받은 user정보를 export
//state.user.user에서 하나는 name:user이고, 다른하나는 initialState안의 user(value값)
//다른 컴포넌트 안에도 현재 로그인정보를 확인할 수 있게 useSelector를 통해 정보를 보내주는 역할

export default userSlice.reducer;
