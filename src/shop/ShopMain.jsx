import React, {Component} from 'react';
import ShopHeader from "./components-shop/ShopHeader";
import ShopKorzina from "./components-shop/ShopKorzina";
import ShopRedact from "./components-shop/ShopRedact";
import listTovars from "../data-shops-items/listTovars";
import ShopTovarCard from "./components-shop/ShopTovarCard";
import './styles-shop/shop-shopMain.css'
import baseStrMarket from "../base";
import SignIn from "./components-shop/shop-login/SignIn";
import firebase from 'firebase/app';
import ShopChat from "./components-shop/ShopChat";

class ShopMain extends Component {

    state={
        tovars:{},
        korzina:{},
    }

    //19
    //синхроним с бд определенный магазин
    //для изменения инфы через бд
    componentDidMount() {
        console.log('componentDidMount')
        const {params} = this.props.match;

        //20
        //получаем значение в корзине попсле обновления страницы
        //и записываем их в стейт если в лсе что-то есть
        const lsSaveAfterUpdate= localStorage.getItem(params.shopUrl)
        console.log('localstorage after update str - ',lsSaveAfterUpdate)
        if(lsSaveAfterUpdate){
            this.setState({korzina: JSON.parse(lsSaveAfterUpdate)})
        }

        this.ref = baseStrMarket.syncState(`${params.shopUrl}/tovars`,{
            context:this,
            state:`tovars`
        })
    }

    //чистим сокеты при уходе со страницы
    componentWillUnmount() {
        baseStrMarket.removeBinding(this.ref)
    }

    //20 - localstorage (key-value) value-должен быть в строчном формате!!!
    componentDidUpdate() {
        console.log('componentDidUpdate')
        const {params} = this.props.match;
        localStorage.setItem(params.shopUrl,JSON.stringify(this.state.korzina))
    }

    //добавление товара форма
    addTovarMain =(tovar)=>{
        console.log('addTovarMain:',tovar)
        const tovars = {...this.state.tovars}
        tovars[`tovar${Date.now()}`] = tovar
        this.setState({tovars})
    }

    //21 - редактирование товара форма
    redactTovarMain =(key,redactTovar)=>{
        const tovars = {...this.state.tovars}
        tovars[key] = redactTovar
        this.setState({tovars})
    }

    //22 - удаляем tovar в редактировании товара админом
    deleteTovarMain =(key)=>{
        const tovars = {...this.state.tovars}
        tovars[key] = null;
        this.setState({tovars})
    }

    //22 - удаляем товар из корзины
    deleteTovarKorzinaMain =(key)=>{
        const korzina = {...this.state.korzina}
        delete korzina[key]
        this.setState({korzina})
    }

    //удаление товара из корзины после оформления заказа
    deleteAllTovarKorzinaMain =()=>{
        this.setState({korzina:''})
    }

    //15 --- ???? - загрузка товара в магаз при нажатии кнопки загрузить товар походу
    loadTovar =()=>{
        this.setState({tovars:listTovars})
    }

    //16 - 8:20
    addKorzinaMain =(key)=>{
        const korzina = {...this.state.korzina}
        korzina[key] = korzina[key]+1 || 1;
        this.setState({korzina})
    }

    kolvoKorz = (key) =>{
        alert(this.state.korzina.length)
    }

    //26
    logoutMain = async ()=>{
        await firebase.auth().signOut();
        window.location.reload()
    }

    render() {
        // console.log(this.state.tovars)
        console.log('Корзина - ',this.state.korzina)
        return (
            <SignIn

                user={
                    <div className={'main-container-blocks'}>
                        <ShopHeader logoutMain={this.logoutMain} />

                        <h2 style={{color:'var(--color-dark-green)'}}>Товары:</h2>
                        <div className='flex-card-tovars-from-shop-main'>

                            {Object.keys(this.state.tovars).map(key =>{
                                return(
                                    <ShopTovarCard
                                        korzina={this.state.korzina}
                                        addKorzinaMain={this.addKorzinaMain}
                                        index={key}
                                        key={key}
                                        details={this.state.tovars[key]}
                                    />
                                )
                            })}
                        </div>

                        <ShopKorzina
                            tovars={this.state.tovars}
                            korzina={this.state.korzina}
                            deleteTovarKorzinaMain={this.deleteTovarKorzinaMain}//для удаления товара из корзины кнопокй
                            //для оформления заказа и корзина выше
                            shopUrl={this.props.match.params.shopUrl}//для магазина из которого заказ
                            logoutMain={this.logoutMain}//для пользователя кто заказывает
                            deleteAllTovarKorzinaMain={this.deleteAllTovarKorzinaMain}//для очистки корзины
                        />

                        <ShopChat />

                    </div>
                }

                admin={
                <div className={'main-container-blocks'}>

                    <ShopHeader logoutMain={this.logoutMain} />

                    <h2>Товары:</h2>
                    <div className='flex-card-tovars-from-shop-main'>

                        {Object.keys(this.state.tovars).map(key =>{
                            return(
                                <ShopTovarCard
                                    korzina={this.state.korzina}
                                    addKorzinaMain={this.addKorzinaMain}
                                    index={key}
                                    key={key}
                                    details={this.state.tovars[key]}
                                />
                            )
                        })}
                    </div>

                    <ShopKorzina
                        tovars={this.state.tovars}
                        korzina={this.state.korzina}
                        deleteTovarKorzinaMain={this.deleteTovarKorzinaMain}//для удаления товара из корзины кнопокй
                        //для оформления заказа и корзина выше
                        shopUrl={this.props.match.params.shopUrl}//для магазина из которого заказ
                        logoutMain={this.logoutMain}//для пользователя кто заказывает
                        deleteAllTovarKorzinaMain={this.deleteAllTovarKorzinaMain}//для очистки корзины
                    />

                    <ShopRedact
                        deleteTovarMain={this.deleteTovarMain}
                        addTovarMain={this.addTovarMain}
                        loadTovar={this.loadTovar}
                        tovars={this.state.tovars}
                        redactTovarMain={this.redactTovarMain}
                    />

                    </div>
                }

            />
        )
    }
}

export default ShopMain;