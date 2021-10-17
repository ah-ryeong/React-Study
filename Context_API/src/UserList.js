import React, {useContext} from 'react';
import {UserDispatch} from './App';

// useEffect : 컴포넌트가 처음 화면에 나타나고 사라질 때 특정 작업을 할 수 있음
// useMemo : 성능을 최적화 하는 상황에서 사용한다.

// 새로운 컴포넌트 만들기 , 한 파일에 두개의 컴포넌트를 만들어도 상관X
const User = React.memo(function User({user}) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    return(
        <div>
            <div>
                <b style={{
                    color : active ? 'green' : 'black',
                    cursor : 'pointer'
                    }}
                    onClick = {() => dispatch({
                        type: 'TOGGLE_USER',
                        id
                    })}
                >
                    {username}
                </b>
                <span>  ({email})</span>
                {/* 삭제 버튼 누르면  onRemve에 user.id 값을 파라미터로 넣어서 동작하도록 하기 */}
                <button onClick={() => dispatch({
                    type: 'REMOVE_USER',
                    id
                })}>삭제</button>
            </div>
        </div>
    );
});

// 배열 렌더링 하기 
// 배열 항목 제거하기 -> onRemove 추가
function UserList({users}) {
    return(
        <div>
            {
                users.map(
                    user => (
                        <User
                            user ={user} 
                            key={user.id} 
                        />
                    )
                )
            }
        </div>
    );
}

// Memo -> 성능 최적화
export default React.memo(
    UserList, 
    (prevProps, nextProps) => nextProps.users === prevProps.users
);
