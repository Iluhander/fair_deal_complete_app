import React, {useEffect, useState} from 'react';
import './Deals.css';
import {getUserDeals, isAuthorised} from "../../../network/userAPI";

const DealsList = () => {
    let [dealsArray, setDealsArray] = useState([]);

    useEffect(() => {
        isAuthorised().then((userData) => {
            return getUserDeals(userData.login);
        }).then((deals) => {
            let arr = [];

            for (let i = 0; i < deals.data.length; ++i) {
                deals.data[i].key = i;
                deals.data[i].href = `/deals/deal/?id=${deals.data[i].id}`;

                arr.unshift(deals.data[i]);
            }

            setDealsArray(arr);
        });
    }, []);

    return (
        <div style={{position: 'relative'}}>
            <div className="dealsList">
                {
                    dealsArray.map(deal =>
                        <a key={deal.key} href={deal.href} style={{textDecoration:"none"}}>
                            <div className="deal">
                                <div style={{borderLeft:'130px solid white', width:'20vw'}}>
                                    <p style={{color:'black'}}>{deal.header}</p>
                                </div>
                                <div style={{width:'4vw'}}>
                                    <div className="dot" />
                                </div>
                                <div style={{width:'20vw'}}>
                                    <p style={{color:"gray"}}>{deal.status}</p>
                                </div>
                                <div style={{borderRight:'60px solid white'}}>
                                    <p style={{cursor:'pointer', color:'gray', fontSize:'16px'}}>Подробнее →</p>
                                </div>
                            </div>
                        </a>
                )}
            </div>

            <div className="addDealBlock">
                <a href="/deals/new_deal"><div/></a>
            </div>
        </div>
    );
};

export default DealsList;