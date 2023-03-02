# Quora Clone Website
![quora_main](https://user-images.githubusercontent.com/83111488/222379973-8efa68b6-1ad5-49f6-aeb3-93fca1a44347.jpg)

- 제작에 도움을 준 영상: https://www.youtube.com/watch?v=j3-4QTcAcNk&t=9623s
- 원본 영상에서 디자인적인 요소를 추가

## 1.기술스택
- 라이브러리 : 리액트 18.2v
- 디자인 툴: Material-ui 4v
- 상태관리 : readuxjs/toolkit 1.9v
- 서버/db : firbase 9.14v

## 2. 주요기능

- 구글 로그인, 질문 작성, 답변 달기, 사진첨부(url)

## 3. 구조도

![main](https://user-images.githubusercontent.com/83111488/218283377-5906187b-c1f4-4423-a791-09abf48122b8.PNG)


## 4. 작동방법
https://firebase.google.com/
```
구글 firebase 회원가입 > 프로젝트 생성 후 > 프로젝트 설정 > 일반 > 내앱 > SDK 설정 및 구성 > 구성 클릭하면
개인 KEY 값들을 복사

루트폴더에 .env 파일 생성 후

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=

해당 키값을 넣어 저장하면 정상 작동됨
```