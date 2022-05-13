import React, {useContext, useEffect, useState} from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";
import {getAccountData, isAuthorised} from "../../../network/userAPI";

const Header = (props) => {
    let [userName, setUserName] = useState({
        id: "",
        username: "",
        first_name: "",
        second_name: "",
        patronymic: "",
        email: "",
        phone: "",
        location: "",
        photo: "svetlana.jpg"
    });

    let navigate = useNavigate();

    useEffect(() => {
        isAuthorised().then((response) => {
            setUserName(response.login);
        }).catch((err) => {
            navigate("/enter");
        });
    }, []);

    let [activeSubPage, setActiveSubPage] = useState(props.currentPage);

    function changeSubPage(newSubPage) {
        setActiveSubPage(newSubPage);
    }

    function quitAccount() {
        localStorage.setItem('token', '');
        navigate("/");
    }

    return (
        <div>
            <div style={{width:'100%', display:'block', position:'absolute'}}>
                <div style={{width:'100%', height:'70px', background:'black'}}>
                    <div className="accountHeader"
                         style={{height:'66px', left:'calc(50vw - 40%)', justifyContent:'space-between'}}>
                        <a href="/"><div className="icon" style={{ width:'56px', height:'56px'}}/></a>
                        <div style={{display:"flex", flexDirection:'row', alignItems:'center'}}>
                            <div style={{display:"flex", flexDirection:'column', justifyContent:'center',
                                color:'white', fontFamily:'"Orelega One"', fontSize:'16px'}}>
                                <a href="/settings">
                                    <p style={{color: 'white', height:'8px'}}>
                                        {userName + "              `"}
                                    </p>
                                </a>
                                <p style={{cursor: 'pointer', height:'12px'}}
                                   onClick={quitAccount}>
                                    Выйти              `
                                </p>
                            </div>

                            <div className="svetlana" style={{ width:'54px', height:'54px'}}/>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%', height:'56px', background:'white',
                    borderBottom:'1px solid black', boxShadow: "0 1px 1px rgba(171,171,171,0.82)"}}>
                    <div className="accountHeader"
                         style={{height:'56px', left:'calc(50vw - 40%)',
                             justifyContent:'space-evenly'}}>
                        <a href="/deals">
                            <p style={{color:(activeSubPage===1)?"rgba(255, 165, 0, 0.82)":"black"}}
                                onClick={() => changeSubPage(1)}>
                                Сделки
                            </p>
                        </a>
                        <a href="/chats">
                            <p style={{color:(activeSubPage===2)?"rgba(255, 165, 0, 0.82)":"black"}}
                               onClick={() => changeSubPage(2)}>
                                Чаты
                            </p>
                        </a>
                        <a href="/settings">
                            <p style={{color:(activeSubPage===3)?"rgba(255, 165, 0, 0.82)":"black"}}
                               onClick={() => changeSubPage(3)}>
                                Настройки
                            </p>
                        </a>
                        <a href="/settings">
                            <p style={{color:(activeSubPage===4)?"rgba(255, 165, 0, 0.82)":"black"}}
                               onClick={() => changeSubPage(3)}>
                                Шаблоны договоров
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{height:'70px', width:'60%', left:'20%', position:'relative'}}/>
            <div style={{height:'56px', width:'100%', position:'relative', zIndex:'0'}}/>
        </div>
    );
};

export default Header;