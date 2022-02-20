import React, {useState} from 'react';
import './MenuButton.css';

const MenuButton = (props) => {
    return (
        <div style={{position:'relative', top:'34px'}}>
            <div className='menuButton' onClick={props.changeVisibility}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        </div>
    );
};

export default MenuButton;