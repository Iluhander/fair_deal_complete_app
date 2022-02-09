import React, {useState} from 'react';

import './Greetings.css';
import MenuButton from "./MenuButton/MenuButton";

const Greetings = (props) => {
    return (
        <div>
            <div className='greetingsBlock'>
                <MenuButton changeVisibility={props.changeVisibility}/>
                <p className='logo'>Fair Deal</p>
            </div>
        </div>
    );
};

export default Greetings;