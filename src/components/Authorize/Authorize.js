import React from 'react';
import './Authorize.css';
import {Button} from "@mui/material";
const Authorize = (props) => {
    function modalClose() {
        props.modalHandle(false);
    }
    function settingsHandle(){
        props.authHandle(true);
    }
    return (
        <div className="auth-window">
            <div className="container">
                <h1>Авторизация</h1>
                <div className="picture">
                    <img src={require('../../img/login.png')} />
                </div>
                <input placeholder="Имя пользователя"/><br/>
                <input type="password" placeholder="Пароль"/><br/>
                <Button onClick={settingsHandle} variant="outlined">Outlined</Button><br/><br/>
                <a onClick={modalClose}>Нет аккаунта? Зарегистрируйтесь!</a>
            </div>
        </div>
    );
};

export default Authorize;