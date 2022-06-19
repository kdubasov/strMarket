import React, {Component} from 'react';
import {Button,Offcanvas,Alert} from "react-bootstrap";
import ShopDostavka from "./ShopDostavka";
import '../styles-shop/shop-shopKorzina.css'
import ShopOformZakaz from "./ShopOformZakaz";

class ShopKorzina extends Component {

    //offcanvas - отображение корзины справа
    state={
        show:false
    }
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});

    //17
    renderKorzina =(key)=>{
        let tovar = this.props.tovars[key];//инфа о товаре
        let kolvoTovar = this.props.korzina[key];//инфа о кол-ве товара добавленного

        let nalichieTovar = tovar && tovar.nalichie === 'dostupno';//true false

        //20 - если нет товара то ничего не возращаем
        //и если эту штуку убрать то ошибка будет по ключу потому что он отрендериться не успевает
        if(!tovar) return null;

        if(!nalichieTovar){
            return <li>Товар {tovar?tovar.nazvanie:'товар'} недоступен</li>
        }

        return(
            //БЛОК ТОВАРА В КОРЗИНЕ
            //удаляем товар прям в алерте
        <Alert key={key} variant="secondary" onClick={()=> this.props.deleteTovarKorzinaMain(key)} dismissible>
            <Alert.Heading>{tovar.nazvanie}</Alert.Heading>
            <p>{kolvoTovar}шт * {tovar.price}р</p>
        </Alert>
        )
    }


    render() {

        //17
        let korzinaId = Object.keys(this.props.korzina)

        let summaZakaza = korzinaId.reduce((prevSummaZakaza,key)=>{
            let tovar = this.props.tovars[key];//инфа о товаре
            let kolvoTovar = this.props.korzina[key];//инфа о кол-ве товара добавленного

            let nalichieTovar = tovar && tovar.nalichie === 'dostupno';//true false
            //если товар доступен то учитываем его если нет то нет
            if(nalichieTovar){
                return prevSummaZakaza + tovar.price * kolvoTovar
            }else{
                return prevSummaZakaza
            }

        },0)//не забываем начальное значение редьюса



        return (
            <div className={'korzina-main'}>
                <Button className='button-open-korzina' variant="dark" onClick={this.handleShow} size='lg'>
                    Корзина {Object.keys(this.props.korzina).length?'+'+Object.keys(this.props.korzina).length:''}
                </Button>

                <Offcanvas show={this.state.show} onHide={this.handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Корзина товаров</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <div>
                            {/*ВСЯ КОРЗИНА*/}
                            <ul style={{margin:0,padding:0}}>
                                {korzinaId.map(this.renderKorzina)}
                            </ul>

                            {/*18*/}
                            {/*итоговая цена даставка и тд*/}
                            <Alert variant="secondary">
                                {summaZakaza > 0?(
                                    <ShopDostavka summaZakaza={summaZakaza} />
                                ):(
                                    <div>
                                        <Alert.Heading>Корзина пуста</Alert.Heading>
                                        <p>Добавьте товар и он отобразится здесь</p>
                                    </div>
                                )}
                            </Alert>

                            <ShopOformZakaz
                                korzina={this.props.korzina}//корзину тоже передаем само собой
                                shopUrl={this.props.shopUrl}//данные для отображения магазина из которого заказ
                                logoutMain={this.props.logoutMain}//передаем данные для отображения инфы о пользователе
                                deleteAllTovarKorzinaMain={this.props.deleteAllTovarKorzinaMain}//очищаем корзину
                                handleClose={this.handleClose}//закрывам корзину
                            />

                        </div>
                    </Offcanvas.Body>

                </Offcanvas>
            </div>
        );
    }
}

export default ShopKorzina;