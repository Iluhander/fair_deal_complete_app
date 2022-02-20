import React, {useState} from 'react';

import './Greetings.css';
import MenuButton from "./MenuButton/MenuButton";
import ProfileButton from "./ProfileButton";

const Greetings = (props) => {
    return (
        <div>
            <div className='greetingsBlock'>
                <div style={{position:'absolute',
                    left:'3.6%', width:'90%',
                    display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <MenuButton changeVisibility={props.changeVisibility}/>
                    <div style={{position:'relative', top:'-20px'}}>
                        <p className='logo'>Fair Deal</p>
                    </div>
                    <ProfileButton/>
                </div>
            </div>
        </div>
    );
};

export default Greetings;