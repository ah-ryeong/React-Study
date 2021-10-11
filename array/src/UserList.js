import React from 'react';

// 새로운 컴포넌트 만들기 , 한 파일에 두개의 컴포넌트를 만들어도 상관X
function User({user, onRemove}) {
    const { username, email, id } = user;
    return(
        <div>
            <div>
                <b>{username}</b><span>{email}</span>
                {/* 삭제 버튼 누르면  onRemve에 user.id 값을 파라미터로 넣어서 동작하도록 하기 */}
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    );
}

// 배열 렌더링 하기 
// 배열 항목 제거하기 -> onRemove 추가
function UserList({users, onRemove}) {
    return(
        <div>
            {
                users.map(
                    user => (
                        <User
                            user ={user} 
                            key={user.id} 
                            onRemove={onRemove} 
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;
