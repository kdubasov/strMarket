import React, {Component} from 'react';
import Login from "./Login";
import firebase from "firebase/app";
import {firebaseStrMarket} from '../../../base'
import 'firebase/auth'

//26
// noinspection JSIgnoredPromiseFromCall
class SignIn extends Component {

    state = {
        user:''
    }

    componentDidMount() {//чтобы при перезагрузки страницы не вылетала опять авторизация
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.loginHandler({user})
            }
        })
    }

    loginHandler =async authData=>{
        console.log(authData.user)//полчучаем данные юзера при его выборе
        const{email} = authData.user
        this.setState({user:email})

    }


    login = () =>{
        const loginProvider = new firebase.auth['GoogleAuthProvider']();
        loginProvider.setCustomParameters({
            prompt: 'select_account'//подключаем выбор аккаунта при входе
        });
        firebaseStrMarket
            .auth()
            .signInWithPopup(loginProvider)
            .then(this.loginHandler)
    }

    render() {
        //если пользователь есть то редерим наш главный файл
        //если нет то страницу входа
            if(!this.state.user){
                return <Login login={this.login}/>
            }else if(this.state.user === 'cergocergo41@gmail.com'){
                return this.props.admin
            }
            return this.props.user
    }
}

export default SignIn;