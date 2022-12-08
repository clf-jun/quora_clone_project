### 구글 firebase 회원가입 > 프로젝트 생성 후 > 프로젝트 설정 > 일반 > 내앱 > SDK 설정 및 구성 > 구성 클릭 후

config firebaseConfig ={
~~~
~~
} 의 값 안에 키들을 루트폴더에 .env 파일 생성 후

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=

규격에 맞는 키값을 넣어 저장하면 정상 작동됩니다.(" "는 제거해야함)

