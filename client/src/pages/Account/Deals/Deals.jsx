import React from 'react';
import './Deals.css';

const Deals = (props) => {
    return (
        <div style={{position: 'relative'}}>
            <div className="dealsList">
                {props.deals.map(deal =>
                    <div key={deal.key} className="deal">
                        <div style={{borderLeft:'130px solid white', width:'20vw'}}>
                            <p>{deal.name}</p>
                        </div>
                        <div style={{width:'4vw'}}>
                            <div className="dot" />
                        </div>
                        <div style={{width:'20vw'}}>
                            <p style={{color:deal.statusColor}}>{deal.status}</p>
                        </div>
                        <div style={{borderRight:'60px solid white'}}>
                            <p style={{cursor:'pointer', color:'gray', fontSize:'16px'}}>Подробнее →</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="addDealBlock">
                <div/>
            </div>
        </div>
    );
};

export default Deals;