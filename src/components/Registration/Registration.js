import React from 'react';
import './Registrtion.css';
import {Button, Checkbox, FormControlLabel} from "@mui/material";

const Registration = (props) => {

    function regClose() {
        props.regHandle(true);
    }
    return (
        <div className="reg-window">
            <div className="container">
                <h1>Регистрация</h1>
                <div className="picture">
                    <img src={require('../../img/reg.png')} />
                </div>
                <div className="inputs">
                    <input placeholder="ФИО"/><br/>
                    <input placeholder="Электронная почта"/><br/>
                    <input placeholder="Номер телефона"/><br/>
                    <input placeholder="Имя пользователя"/><br/>
                    <input type="password" placeholder="Пароль"/><br/>
                    <FormControlLabel className="cb" control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 28, marginTop: -2 }}} />} label="Согласие на обработку персональных данных" /> <br/>
                    <div style={{marginLeft: 65}}>
                        <Button onClick={regClose} width={200}>Регистрация</Button><br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;