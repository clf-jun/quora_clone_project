import React, { useEffect } from 'react';
import './App.css';
import Quora from './Quora';
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './fire_base';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(); //로그인 한 것을 앱 전역에 알리기 위해서는 useDispatch를 통해서 전역에 알림
  /*
  useSelector란
  Redux의 상태값을 조회하기 위한 hook 함수
  이 함수에서 userSlice.js의 state => state.user.user;를 가져옴으로
  현재 state의 createSlice action에 따른 user의 상태값을 넣어주는 것으로 생각하면 된다.
   */
  useEffect( () => {   //useEffect는 간단히 말하면 동기화
    auth.onAuthStateChanged((authUser) => { //onAuthStateChanged로그인 상태가 어떤지 확인할 수 있는 함수.
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        })) //uid,photo...등의 값들이 다 payload로써 userSlice의 ruducer안으로 들어감.
        console.log(authUser);
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]) //dispatch 변화에 따라 계속 동기화 시켜줌. 이부분 중요(3:15부분)

  return (
    <div className="App">
      {
        user ? (<Quora/>) : (<Login/>)
      }
    </div>
  );
}
/*
로그인이 된 상태면 Quora page로 이동하게 하고,
로그인이 안된 상태면 login page로 이동하도록 설정
*/

export default App;
