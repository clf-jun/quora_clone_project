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
      state.user = action.payload; //App.js useEffect 안에 dispatch 받은 값이 payload로 들어감 
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
