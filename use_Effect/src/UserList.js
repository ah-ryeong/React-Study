import React, {useEffect} from 'react';

// useEffect : 컴포넌트가 처음 화면에 나타나고 사라질 때 특정 작업을 할 수 있음
// useMemo : 성능을 최적화 하는 상황에서 사용한다.

// 새로운 컴포넌트 만들기 , 한 파일에 두개의 컴포넌트를 만들어도 상관X
const User = React.memo(function User({user, onRemove, onToggle}) {
    const { username, email, id, active } = user;
    // 빈배열이 있을 때
    // useEffect(() => {
    //     // 컴포넌트가 생성될 때 화면에 나타남 
    //     // props -> state , REST API, D3 Vido.js, setInterval, setTimeout 같은 작업을 여기서 처리할 수 있음
    //     console.log('컴포넌트가 화면에 나타남');
    //     // 컴포넌트가 사라질 때 특정 작업을 하는 방법 , 언마운트
    //     return () => {
    //         // clearInterval, clearTimeout, 라이브러리 인스턴스 제거를 여기서 할 수 있음 
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }

    //     // deps : 빈 배열을 넣어줌 , 의존되는 값이 비어있을 경우 컴포넌트가 처음 화면에 나타날 때만 실행됨
    // }, []);
    
    // 배열에 user 값이 있을 때, user값이 설정되거나 바뀔 때 마다 호출된다.
    useEffect(() => {
        console.log('user 값이 설정 됨 : ');
        console.log(user);
        return () => {
            console.log('user값이 바뀌기 전 : ');
            console.log(user);
        }
    }, [user]);

    return(
        <div>
            <div>
                <b style={{
                    color : active ? 'green' : 'black',
                    cursor : 'pointer'
                    }}
                    onClick = {() => onToggle(id)}
                >
                    {username}
                </b>
                <span>  ({email})</span>
                {/* 삭제 버튼 누르면  onRemve에 user.id 값을 파라미터로 넣어서 동작하도록 하기 */}
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    );
});

// 배열 렌더링 하기 
// 배열 항목 제거하기 -> onRemove 추가
function UserList({users, onRemove, onToggle}) {
    return(
        <div>
            {
                users.map(
                    user => (
                        <User
                            user ={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle ={onToggle} 
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
