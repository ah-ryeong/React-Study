import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList'

// useMemo : 특정 값이 바뀌었을 때만 특정 함수를 실행해서 연산하도록 처리하고
// 원하는 값이 변하지 않았다면 리렌더링할때 이전에 사용하던거 재사용

// useCallbacks : 이전에 만들었던 함수를 재사용하는 것 , 함수를 위한 hook
// 컴포넌트가 리렌더링 될 때마다 함수를 새로 만드는데 한번 만든 함수를 재사용 할 수 있도록 해주는게 좋다.

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  // 초록색으로 된 유저의 수를 연산해서 가져옴
  return users.filter(user => user.active).length;
}

// App 컴포넌트에서 사용할 초기상태를 컴포넌트 밖에 선언해준다.
const initialState = {
  inputs : {
    username: '',
    email: ''
  },
  users : [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT' :
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.value
        }
      };
      case 'CREATE_USER':
        return {
          inputs: initialState.inputs, 
          users: state.users.concat(action.user)
        };
        case 'TOGGLE_USER':
          return {
            ...state,
            users: state.users.map(user =>
              user.id === action.id
                ? { ...user, active : !user.active}
                : user
            )
          };
        case 'REMOVE_USER' :
          return {
            ...state,
            users: state.users.filter(user => user.id !== action.id)
          }
      default : 
        throw new Error('Unhandled action');
  }
}

function App() {
  // 기존의 useState를 사용한 것을 Reducer 사용해보기 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  const nextId = useRef(4);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value
    })
  }, []);

  const onCreate = useCallback(() =>{
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current +=1;
  }, [username, email]);

  const onToggle = useCallback( id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback( id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  
  return (
    <>
      <CreateUser 
        username = {username} 
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList 
        users={users} 
        onToggle = {onToggle} 
        onRemove={onRemove} 
        />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;