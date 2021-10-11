import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList'

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  // inputs 에서 username 이랑 email 추출
  const {username, email} = inputs;
  
  const onChange = e => {
    const {name, value} = e.target;
    setInputs( {
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id : 1,
        username : 'winter',
        email : 'winter@example.com'
    },
    {
        id : 2,
        username : 'tester',
        email : 'tester@example.com'
    },
    {
        id : 3,
        username : 'tester2',
        email : 'tester2@example.com'
    }
]);

// 배열에서도 users에다가 값을 추가한다해서 push, splice, sort 같은 함수 사용 X
// 꼭 사용해야 할 경우에는 배열을 복사하고(... 붙여서 하는거) 사용해야함
const nextId = useRef(4);

const onCreate = () => {
  // 새로운 유저값 만들기
  const user = {
    id : nextId.current,
    username,
    email,
  };

  setUsers(users.concat(user));

  // 클릭할 때, 인풋에 있는 값 지우기
  setInputs({
    username : '',
    email : '',
  });

  nextId.current += 1;
}


  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
