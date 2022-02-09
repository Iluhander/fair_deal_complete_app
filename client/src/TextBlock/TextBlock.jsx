import React from 'react';
import './TextBlock.css';

const TextBlock = (props) => {
        if (props.button != '') {return (
            <div className='textBlock'>
                <div style={{position: 'relative', top:'60px'}}>
                    <h1>{props.h1}</h1>
                </div>
                <div style={{position: 'relative', top:'40px', width: '90%'}}>
                    <p>{props.p}</p>
                </div>
                <div style={{position: 'relative', top:'100px'}}>
                    <button>{props.button}</button>
                </div>

            </div>)
        } else { return (
            <div className='textBlock'>
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>)
        }
};

export default TextBlock;