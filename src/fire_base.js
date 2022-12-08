import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  }; 
 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  //일반 로그인
  const provider = new firebase.auth.GoogleAuthProvider();
  //구글 로그인

  const db = firebaseApp.firestore();

  export {auth, provider}
  //export는 한개의 선언에서 여러개를 다른 컴포넌트에서 import 할 수 있음. {}의 집합형태
  export default db;
  //export default는 오로지 한개의 모듈만을 가져온다.