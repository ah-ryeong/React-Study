import React from 'react';

function User({user}) {
    if(!user) return null;

    return (
        <div>
            <div>
                <b>ID</b> : {User.id}
            </div>
            <div>
                <b>Username</b> : {User.username}
            </div>
        </div>
    );
}

export default User;