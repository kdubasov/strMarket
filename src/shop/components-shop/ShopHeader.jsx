import React, {Component} from 'react';
import {Button,Card} from "react-bootstrap";
import firebase from "firebase/app";
import '../styles-shop/shop-shopHeader.css'

class ShopHeader extends Component {

    state = {
        displayName:'',
        email:'',
        photoUrl:''
    }

    componentDidMount(){//чтобы при перезагрузки страницы не вылетала опять авторизация
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.loginHandler({user})
            }
        })
    }

    loginHandler =async authData=>{
        //console.log(authData.user)//полчучаем данные юзера при его выборе
        const{displayName,email,photoURL} = authData.user
        this.setState({displayName:displayName,email:email,photoUrl:photoURL})
    }

    render() {
        const {displayName} = this.state

        //ретерним аккаунт
        return (
            <div className={'shop-header-main'}>
                {displayName?(
                    <div>
                        <Card>
                            <Card.Body>
                                <div className={'img-container-shop-header'}>
                                    <img alt={displayName} src={this.state.photoUrl} />
                                </div>
                                <div className={'info-container-shop-header'}>
                                    <h4>{this.state.displayName}</h4>
                                    <p>{this.state.email}</p>
                                    <Button onClick={this.props.logoutMain}>Выйти</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ):(
                    <Card>
                        <Card.Body>Авторизируйтесь на сайте</Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default ShopHeader;