import React, {useRef} from 'react';
import UserList from './UserList'

// useRef로 컴포넌트 안의 변수 만들기 
// 계속 유지하고 싶은 값을 관리하기 위해서는 useState로 관리해줘야한다. 근데 이거는 상태를 바꾸면 컴포넌트가 리렌더링됨
// 구지 리렌더링이 필요없을 경우 useRef를 사용하면 됨
// setTimeout, setInterval의 id 외부라이브러리를 사용하여 생성된 인스턴스 Scrolll 위치 등... 
// useRef는 바뀌어도 컴포넌트가 리렌더링 되지 않음
function App() {
    const users =[
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
      },
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    // 만약 useRef(4)에 담은 값을 보고 싶다면 nextId.current로 조회 가능
    // console.log(nextId.current); // 4

    // onCreate 가 실행될 때 마다 nextId.current를 사용하고 기존 값에다가 1을 추가 
    // 값이 바뀐다고 해서 컴포넌트가 리렌더링 X
    nextId.current += 1;
  }

  return (
    <div >
      <UserList users={users} />
    </div>
  );
}

export default App;
