import React from 'react';

// 새로운 컴포넌트 만들기 , 한 파일에 두개의 컴포넌트를 만들어도 상관X
function User({user}) {
    return(
        <div>
            <div>
                <b>{user.username}</b><span>{user.email}</span>
            </div>
        </div>
    );
}

// 배열 렌더링 하기 
function UserList({users}) {
    return(
        <div>
            {
                users.map(
                    user => (<User user ={user} key={user.id}/>)
                )
            }
        </div>
    );
}

export default UserList;
