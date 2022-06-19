import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import AppContactForm from "../../../app/components-app/AppContactForm";
import './Login.css'

//26
const Login = (props) => {
    return (
        <div className="main-container-blocks">

            <div className={'login-main'}>
                <h2>Авторизация</h2>
                <p>
                    Чтобы совершать покупки на сайте вам необходимо пройти авторизацию.
                    Указывайте ваш действительный адрес электронной почты,
                    в дальнейшем мы отправим вам письмо на эту почту.
                </p>
                <Button onClick={()=>props.login()} variant='dark'>Войти</Button>
                <Button variant='dark'><Link to={'/'}>К главной</Link></Button>
            </div>

            <AppContactForm />
        </div>
    );
};

export default Login;