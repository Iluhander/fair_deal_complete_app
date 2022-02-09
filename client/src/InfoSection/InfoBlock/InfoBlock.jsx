import React, {useState} from 'react';
import './InfoBlock.css';

const InfoBlock = (props) => {
    const [display, setDisplay] = useState('none');

    function changeDisplay() {
        if (display == 'none') {
            setDisplay('inline');
        } else {
            setDisplay('none');
        }
    }

    return (
        <div className='infoBlock' style={{background: props.background}}>
            <hr/>
            <p className='pStyle' onClick={changeDisplay} style={{cursor:'pointer'}}>{props.text}</p>
            <p className='pStyle' style={{display: display}}>Абракабэбра</p>
            <hr/>
        </div>
    );
};

export default InfoBlock;