import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import firebase from "firebase/app";
import {contactFormStrMarket} from "../../base";

// noinspection JSIgnoredPromiseFromCall
class ShopOformZakaz extends Component {

    //стейт со значениями заказа которые отправляю в бд
    state = {
        displayName:'',
        email:'',
        shopUrl:this.props.shopUrl,
        korzina:Object.keys(this.props.korzina) + ' кол-во - ' + Object.values(this.props.korzina)//вывод дебильный потому что типы данных мозги ....
    }

    //форма нач
     handleSubmit = (e) => {
        e.preventDefault();

        contactFormStrMarket.collection("users-order").doc(String(new Date()))//название коллекции
            .set({
                displayName: this.state.displayName,//поля ввода данных для записи
                email: this.state.email,
                shopUrl:this.state.shopUrl,
                korzina:this.state.korzina
            })
            .then(() => {
                alert("Ваш заказ отправлен 👍");//вывод если все ок
            })
            .catch((error) => {
                alert(error.message);//вывод ошибок
            });


        this.setState({korzina:''})//очищаем заказ другие поля можно оставить
         this.props.deleteAllTovarKorzinaMain()//очищаем главную корзину после оформления заказа
         this.props.handleClose()//закрывам корзину
         console.log(this.state)
    };
    //форма конец

    //для отображения емаила пользователя
    componentDidMount(){//чтобы при перезагрузки страницы не вылетала опять авторизация
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.loginHandler({user})
            }
        })
    }

    loginHandler =async authData=>{
        //console.log(authData.user)//полчучаем данные юзера при его выборе
        const{displayName,email} = authData.user
        this.setState({displayName:displayName,email:email})
    }
    //для отображения емаила конец

    render() {
        console.log(this.state)
        return (
            <div>
                {/*проверка на отображение кнопки*/}
                {Object.entries(this.props.korzina).length !== 0?(
                    <Button onClick={this.handleSubmit} variant='outline-secondary'>
                        Оформить заказ
                    </Button>
                ):null}

                {/*тут я вывод данных проверял для этой ....... корзины*/}
                {/*<p>{this.state.displayName}</p>*/}
                {/*<p>{this.state.email}</p>*/}
                {/*<p>{this.props.shopUrl}</p>*/}
                {/*<p>{Object.entries(this.props.korzina)}</p>*/}
            </div>
        );
    }
}

export default ShopOformZakaz;