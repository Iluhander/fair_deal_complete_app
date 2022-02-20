import React from 'react';

const ProfileButton = () => {
    return (
        <div style={{position:'relative', filter: 'grayscale(50%)'}}>
            <img src="profile_sign.png" style={{height: '40px', width: '40px', position: 'absolute', top: '30px',
                cursor: 'pointer', filter: 'brightness(45%)'}}/>
        </div>
    );
};

export default ProfileButton;