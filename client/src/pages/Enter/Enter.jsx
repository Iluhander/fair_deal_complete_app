import React, {useState} from 'react';
import './Enter.css';

const Enter = () => {
    let [formVisible, setFormVisible] = useState(true);

    function changeForm() {
        setFormVisible(!formVisible);
    }

    return (
        <div>
            <div className="entranceBlock">
                <form style={{height:'320px', width:'320px', display:formVisible?"":"none"}}>
                    <label>
                        Имя пользователя:
                    </label>
                    <input type="text" name="name" required maxLength="12"/>
                    <label>
                        Пароль:
                    </label>
                    <input type="password" name="password" required maxLength="14"/>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"20px"}}>
                        <input type="submit" value="Войти" className="entranceButton" style={{height:'40px'}}/>
                        <p className="changeForm" onClick={changeForm}>Зарегистрироваться</p>
                    </div>
                </form>
                <form style={{height:'340px', width:'320px', display:formVisible?"none":""}}>
                    <label>
                        Имя пользователя:
                    </label>
                    <input type="password" name="name" required maxLength="12"/>
                    <label>
                        Пароль:
                    </label>
                    <input type="password" name="password" required maxLength="14"/>
                    <label>
                        Пароль повторно:
                    </label>
                    <input type="text" name="password" required maxLength="14"/>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <input type="submit" value="Зарегистрироваться" className="entranceButton"
                               style={{height:'40px', width:'220px', fontSize:'18px'}}/>
                        <p className="changeForm" onClick={changeForm}>Войти</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Enter;