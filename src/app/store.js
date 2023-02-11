import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import questionReducer from '../features/counter/questionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});
/*
Store는 state값들을 저장하는 장소

reducer에서 전달받은 action을 redux의 dispatch 함수를 사용해서 store로 전달함.

Store는 configureStore를 통해서 만들 수 있고,

configureStore 안에 각 reducer들을 다 통합시킴
 */
