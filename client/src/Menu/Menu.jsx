import React, {useState} from 'react';
import './Menu.css';

var changeVisibility = () => {
    setVisibility();
};

var setVisibility = () => {};

const Menu = (props) => {
    const [display, setDisplay] = useState('none');

    setVisibility = () => {
        if (display == 'none') {
            setDisplay('inline');
        } else {
            setDisplay('none');
        }

        props.changeBlur();
    }

    return (
        <div className='menu' style={{display:display}}>
            <div>
                <p className='menuP'>Заключить сделку</p>
                <p className='menuP'>О нас</p>
                <p className='menuP'>Контакты</p>
            </div>
        </div>
    );
};

export {changeVisibility as changeMenuVisibility};
export default Menu;