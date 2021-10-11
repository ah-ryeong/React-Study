import React from 'react';

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
function UserList( {users}) {
    return(
        <div>
            {
                users.map(
                    user => {<User user ={user} key={user.id}/>}
                )
            }
        </div>
    );
}

export default UserList;
