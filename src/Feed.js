import React, { useEffect, useState } from 'react';
import './Feed.css';
import db from './fire_base';
import Post from './Post';
import QuoraBox from './QuoraBox';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    db.collection("questions").orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => setPosts(snapshot.docs.map(
      (doc) => (({
        id: doc.id,
        question: doc.data()
      }))
    )))
  }, [])
  //questions db안에 id
  //firebase id안에 모든 정보doc.data() (imageUrl,user,email..)가 question 안에 들어감
  //orderBy('timestamp', 'desc') 등록시간의 내림차순 순서로 가져온다.

  return (
    <div className='feed'>
        <QuoraBox/>
        {posts.map(({id, question}) => (
          <Post 
            key={id} 
            Id={id} 
            image={question.imageUrl} 
            question={question.question} 
            timestamp = {question.timestamp} 
            quoraUser = {question.user} 
          />
        ))}
    </div>
  )
}
//리덕스를 통해서 정보를 가져오지 않는 이유는, firebase db에서 정보를 가져오기 때문에


/*post를 mapping해서 계속해서 추가하도록 해준다.
Feed()는 firebase에 있는 질문의 정보를 Post에 동기화(useEffect 활용) 시켜줘야 한다.

useEffect를 통해서 posts가 받은 정보를 props를 통해 Post에 전달
(Feed는 부모 컴포넌트, Post는 자식 컴포넌트)
*/
export default Feed; 