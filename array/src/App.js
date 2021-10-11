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

  // 항목 수정하기 -> active값 추가
  const [users, setUsers] = useState([
    {
        id : 1,
        username : 'winter',
        email : 'winter@example.com',
        active : true,
    },
    {
        id : 2,
        username : 'tester',
        email : 'tester@example.com',
        active : false,
    },
    {
        id : 3,
        username : 'tester2',
        email : 'tester2@example.com',
        active : false,
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
};

// users에 filter를 걸어서 각 유저를 확인해서 user.id가 파라미터가 가져온거랑 불일치 한 것만 가져온다
// 배열 삭제
const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
};

const onToggle = id => {
  // id 값을 파라미터로 가져와서 불변성을 지키면서 배열 업데이트 할 때에도 map을 사용할 수 있음
  // id가 일치한다면 업데이트 일치하지 않으면 없데이트X
  setUsers(users.map(
    user => user.id === id 
      ? {...user, active: !user.active}
      : user
  ));
};

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
