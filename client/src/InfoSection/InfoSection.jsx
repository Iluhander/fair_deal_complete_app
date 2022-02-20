import React from 'react';
import './InfoSection.css';
import InfoBlock from "./InfoBlock/InfoBlock";

const InfoSection = () => {
    return (
        <div className='infoSection'>
            <InfoBlock background='rgba(255, 255, 255, 0.08)'
                       question='Как Fair Deal гарантирует безопасность сделок ?'
                       answer='Команда Fair Deal выступает третьей стороной в договоре, лично контролируя выполнение его условий.'
            />
            <InfoBlock background='rgba(255, 255, 255, 0.08)'
                       question='Это дорого ?'
                       answer='В настоящий момент услуги Fair Deal стоят 0 рублей.'
            />
        </div>
    );
};

export default InfoSection;