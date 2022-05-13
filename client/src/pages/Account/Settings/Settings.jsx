import React, {useContext, useEffect, useState} from 'react';
import './Settings.css';
import UserContext from "../../../utilities/userContext";
import {getAccountData, isAuthorised, setAccountData} from "../../../network/userAPI";

const Settings = () => {
    let [userLogin, setUserLogin] = useState('');
    let [userFirstName, setUserFirstName] = useState('');
    let [userSecondName, setUserSecondName] = useState('');
    let [userPatronymic, setUserPatronymic] = useState('');
    let [userEmail, setUserEmail] = useState('');
    let [userPhone, setUserPhone] = useState('');
    let [userLocation, setUserLocation] = useState('');
    let [info, setInfo] = useState('');
    let [infoColor, setInfoColor] = useState('red');
    let [userData, setUserData] = useState({});
    let [sendButtonPressed, setSendButtonPressed] = useState(0);

    useEffect(() => {
        if (sendButtonPressed > 0) {
            setAccountData({
                login: userLogin,
                first_name: userFirstName,
                second_name: userSecondName,
                patronymic: userPatronymic,
                email: userEmail,
                phone: userPhone,
                location: userLocation
            }).then(newToken => {
                localStorage.setItem('token', newToken);
                setInfo('Данные сохранены');
                setInfoColor('green');
            }).catch((e) => {
                setInfo(e.response.data.message);
                setInfoColor('red');
            });
        }
    }, [sendButtonPressed]);

    useEffect(() => {
        isAuthorised().then((response) => {

            setUserLogin(response.login);
            setUserFirstName(response.first_name ?? " ");
            setUserSecondName(response.second_name ?? " ");
            setUserPatronymic(response.patronymic ?? " ");
            setUserEmail(response.email ?? " ");
            setUserPhone(response.phone ?? " ");
            setUserLocation(response.location ?? " ");
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
                                    <p>Имя</p>
                                    <input required type="text" value={userFirstName}
                                           onChange={e => setUserFirstName(e.target.value)}/>
                                </div>
                                <div className="formElem">
                                    <p>Фамилия</p>
                                    <input required type="text" value={userSecondName}
                                           onChange={e => setUserSecondName(e.target.value)}/>
                                </div>
                                <div className="formElem">
                                    <p>Отчество</p>
                                    <input required type="text" value={userPatronymic}
                                           onChange={e => setUserPatronymic(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow">
                                <div className="formElem">
                                    <p>Почта</p>
                                    <input required type="email" value={userEmail}
                                           onChange={e => setUserEmail(e.target.value)}/>
                                </div>
                                <div className="formElem">
                                    <p>Номер телефона</p>
                                    <input required type="tel" value={userPhone}
                                           onChange={e => setUserPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="formRow">
                                <div className="formElem">
                                    <p>Местонахождение</p>
                                    <input required type="text" value={userLocation}
                                           onChange={e => setUserLocation(e.target.value)}/>
                                </div>
                                <div className="formElem">
                                    <p>Верификация личности</p>
                                    <input type="file" style={{width:'260px', height:'24px'}}/>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:'row', alignItems:'center'}}>
                            <button type="button" className="formSendButton"
                                    onClick={() => {setSendButtonPressed(sendButtonPressed + 1)}}>
                                Сохранить
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

export default Settings;