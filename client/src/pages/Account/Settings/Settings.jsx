import React from 'react';
import './Settings.css';

const Settings = () => {
    return (
        <div>
            <div style={{width:'100%', height:'400px'}}>
                <div className="settingsBlock">
                    <form>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="settingsRow">
                                <div className="setting">
                                    <p>Имя</p>
                                    <input required type="text"/>
                                </div>
                                <div className="setting">
                                    <p>Фамилия</p>
                                    <input required type="text"/>
                                </div>
                                <div className="setting">
                                    <p>Отчество</p>
                                    <input required type="text"/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="settingsRow">
                                <div className="setting">
                                    <p>Почта</p>
                                    <input required type="email"/>
                                </div>
                                <div className="setting">
                                    <p>Номер телефона</p>
                                    <input required type="tel"/>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid black'}}>
                            <div className="settingsRow">
                                <div className="setting">
                                    <p>Местонахождение</p>
                                    <input required type="text"/>
                                </div>
                                <div className="setting">
                                    <p>Верификация личности</p>
                                    <input type="file" style={{width:'260px', height:'24px'}}/>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Сохранить" className="formSendButton"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;