import React, {useContext, useEffect, useState} from 'react';
import './Enter.css';
import {useLocation, useNavigate} from "react-router-dom";
import {registration, login, isAuthorised} from "../../network/userAPI";

const Enter = () => {
    let [formVisible, setFormVisible] = useState(true);
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');
    let [passwordRepeated, setPasswordRepeated] = useState('');
    let [errorResponse, setErrorResponse] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        isAuthorised().then((response) => {
            navigate("/deals");
        }).catch((err) => {});
    }, []);

    function changeForm() {
        setFormVisible(!formVisible);
    }

    const location = useLocation();
    const signIn = () => {
        login(username, password)
            .then((value) => {
                navigate("/deals");
            })
            .catch((e) => {
                setErrorResponse(e.response.data.message);
            });
    }

    const register = () => {
        registration(username, email, phone, password)
            .then((value) => {
                navigate("/deals");
            })
            .catch((e) => {
                setErrorResponse(e.response.data.message);
            });
    }

    const tryRegister = async () => {
        if (username.trim().length === 0) {
            setErrorResponse("Логин должен быть непустой");
        } else if ((email.trim().length === 0) && (phone.trim().length === 0)) {
            setErrorResponse("Укажите либо почту, либо номер телефона");
        } else if (password.trim().length === 0) {
            setErrorResponse("Пароль должен быть непустой");
        } else if (password !== passwordRepeated) {
            setErrorResponse("Пароли должны совпадать");
        } else {
            await register();
        }
    }

    return (
        <div>
            <div className="entranceBlock">
                <form style={{height:'320px', width:'320px', display:formVisible?"":"none"}}>
                    <label>
                        Имя пользователя:
                    </label>
                    <input type="text" name="name" required maxLength="12"
                           value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>
                        Пароль:
                    </label>
                    <input type="password" name="password" required maxLength="14"
                           value={password} onChange={e => setPassword(e.target.value)}/>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"20px"}}>
                        <button type="button" className="entranceButton" style={{height:'40px'}}
                                onClick={() => {signIn(username, password)}}>
                            Войти
                        </button>
                        <p className="changeForm" onClick={changeForm}>Зарегистрироваться</p>
                    </div>
                    <p className="apiResponseError">{errorResponse}</p>
                </form>
                <form style={{height:'420px', width:'320px', display:formVisible?"none":""}}>
                    <label>
                        Имя пользователя:
                    </label>
                    <input type="text" name="name" required maxLength="12"
                           value = {username} onChange={e => setUsername(e.target.value)}/>
                    <label>
                        Почта:
                    </label>
                    <input type="email" name="name" required maxLength="22"
                           value={email} onChange={e => setEmail(e.target.value)}/>
                    <label>
                        Номер телефона:
                    </label>
                    <input type="tel" name="name" required maxLength="20"
                           value={phone} onChange={e => setPhone(e.target.value)}/>
                    <label>
                        Пароль:
                    </label>
                    <input type="password" name="password" required maxLength="14"
                           value = {password} onChange={e => setPassword(e.target.value)}/>
                    <label>
                        Пароль повторно:
                    </label>
                    <input type="password" name="password" required maxLength="14"
                           value={passwordRepeated} onChange={e => setPasswordRepeated(e.target.value)}/>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <button type="button" className="entranceButton"
                                style={{height:'40px', width:'220px', fontSize:'18px'}}
                                onClick={() => tryRegister()}>
                            Зарегистрироваться
                        </button>
                        <p className="changeForm" onClick={changeForm}>Войти</p>
                    </div>
                    <p className="apiResponseError">{errorResponse}</p>
                </form>
            </div>
        </div>
    );
};

export default Enter;