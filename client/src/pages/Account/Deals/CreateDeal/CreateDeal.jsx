import React, {useEffect, useState} from 'react';
import './CreateDeal.css';
import {createDeal, isAuthorised} from "../../../../network/userAPI";
import {useNavigate} from "react-router-dom";

const CreateDeal = () => {
    let [userLogin, setUserLogin] = useState('');
    let [goodName, setGoodName] = useState('');
    let [secondSideLogin, setSecondSideLogin] = useState('');
    let [dealDescription, setDealDescription] = useState('');
    let [sendButtonPressed, setSendButtonPressed] = useState(0);
    let [info, setInfo] = useState('');
    let [infoColor, setInfoColor] = useState('green');
    let navigate = useNavigate();

    useEffect(() => {
        if (sendButtonPressed > 0) {
            createDeal({
                goodName: goodName,
                firstSideLogin: userLogin,
                secondSideLogin: secondSideLogin,
                dealDescription: dealDescription,
                picturesIds: []
            }).then((response) => {
                navigate("/deals");
            }).catch((e) => {
                setInfo(e.response.data.message);
                setInfoColor('red');
            });
        }
    }, [sendButtonPressed]);

    useEffect(() => {
        isAuthorised().then((response) => {
            console.log(response);

            setUserLogin(response.login);
        });
    }, []);

    return (
        <div>
            <div style={{width:'100%', height:'400px'}}>
                <div className="formBlock">
                    <form>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow">
                                <div className="formElem">
                                    <p>Название товара</p>
                                    <input required type="text" value={goodName}
                                           onChange={e => setGoodName(e.target.value)}/>
                                </div>
                                <div className="formElem">
                                    <p>Логин второй стороны сделки</p>
                                    <input required type="text" value={secondSideLogin}
                                           onChange={e => setSecondSideLogin(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow" style={{height: '200px'}}>
                                <div className="formElem">
                                    <p>Описание сделки</p>
                                    <input required type="email" style={{
                                        width: '400px',
                                        height:'100px'
                                    }} value={dealDescription}
                                           onChange={e => setDealDescription(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow">
                                <div className="formElem">
                                    <p>Добавьте фото</p>
                                    <input type="file" multiple="multiple" accept="image/*,image/jpeg"
                                           style={{width:'260px', height:'24px'}}/>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:'row', alignItems:'center'}}>
                            <button type="button" className="formSendButton"
                                    style={{width:'200px'}}
                                    onClick={() => {setSendButtonPressed(sendButtonPressed + 1)}}>
                                Создать сделку
                            </button>
                            <p style={{color:infoColor}}>
                                {info}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateDeal;