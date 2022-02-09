import React from 'react';
import './InfoSection.css';
import InfoBlock from "./InfoBlock/InfoBlock";

const InfoSection = () => {
    return (
        <div className='infoSection'>
            <InfoBlock background='rgba(255, 255, 255, 0.08)' text='Как Fair Deal гарантирует безопасность сделок ?'/>
            <InfoBlock background='rgba(255, 255, 255, 0.08)' text='............................................'/>
        </div>
    );
};

export default InfoSection;