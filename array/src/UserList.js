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
function UserList() {
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

    return(
        <div>
            {
                users.map(
                    // key값을 지정해줘야함(고유값)
                    user => {<User user ={user} key={user.id}/>}
                    // 만약 지정할 고유값이 없는 경우, map 함수의 index를 사용해도 됨
                    // 왠만하면 key에 index를 넣는건 피하는게 좋다. 정확한 key 값이 있어야 어떤 element를 가르키고 있는지 확실히 알 수 있기 때문에,
                    // 배열에 값을 제거하거나 추가할 때 효율적으로 작업할 수 있다.
                    // (user, index) => {<User user ={user} key={index}/>}
                )
            }
        </div>
    );
}

export default UserList;
