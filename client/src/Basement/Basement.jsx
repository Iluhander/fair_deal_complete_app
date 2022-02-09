import React from 'react';
import './Basement.css';

const Basement = () => {
    return (
        <div className='basement'>
            <div style={{display: 'flex', flexDirection: 'column',
                alignItems: 'center'}}>
                <div className='logoPicture'/>
                <p style={{fontSize: '18px'}}>@All Rights Reserved. Acme inc.</p>
                <p style={{position: 'relative', top: '-22px', fontSize: '18px', color:'#f5d3a6'}}>
                    fair_deal@gmail.com
                </p>
            </div>
        </div>
    );
};

export default Basement;