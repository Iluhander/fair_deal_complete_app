import React, {useEffect, useState} from 'react';
import {getDeal, isAuthorised, setAccountData} from "../../../../network/userAPI";
import {useParams, useSearchParams} from "react-router-dom";
import './Deal.css';

const Deal = () => {
    let [goodName, setGoodName] = useState('');
    let [firstSideLogin, setFirstSideLogin] = useState('');
    let [secondSideLogin, setSecondSideLogin] = useState('');
    let [dealDescription, setDealDescription] = useState('');
    let [dealStatus, setDealStatus] = useState('');

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("id")) {
            getDeal(searchParams.get("id")).then((response) => {
                console.log(response);
                setGoodName(response.data.dataValues.header);
                setFirstSideLogin(response.data.firstSideLogin);
                setSecondSideLogin(response.data.secondSideLogin);
                setDealDescription(response.data.dataValues.comment);
                setDealStatus(response.data.dataValues.status);
            });
        }
    }, []);

    return (
        <div>
            <div style={{width:'100%', height:'400px'}}>
                <div className="formBlock">
                    <div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow">
                                <div className="formElem">
                                    <p className="descriptionP">Сторона 1</p>
                                    <p className="mainP">{firstSideLogin}</p>
                                </div>
                                <div className="formElem">
                                    <p className="descriptionP">Сторона 2</p>
                                    <p className="mainP">{secondSideLogin}</p>
                                </div>
                                <div className="formElem">
                                    <p className="descriptionP">Сделка</p>
                                    <p className="mainP">{goodName}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow">
                                <div className="formElem">
                                    <p className="descriptionP">Статус</p>
                                    <p className="mainP">{dealStatus}</p>
                                </div>
                                <div className="formElem">
                                    <p className="descriptionP">Описание</p>
                                    <p className="mainP">{dealDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deal;