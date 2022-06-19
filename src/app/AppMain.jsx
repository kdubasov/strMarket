import React, {Component} from 'react';
import listShops from "../data-shops-items/listShops";
import {Button, Card, ListGroup} from "react-bootstrap";
import './styles-app/app-appMain.css'
import './styles-app/app-appSetShop.css'
import AppContactForm from "./components-app/AppContactForm";
import AppPreviewBlock from "./components-app/AppPreviewBlock";
import AppPopularCateg from "./components-app/AppPopularCateg";
import AppTovarsSlider from "./components-app/AppTovarsSlider";
import AppCopyPrevBlock from "./components-app/AppCopyPrevBlock";
import AppCompanys from "./components-app/AppCompanys";


class AppMain extends Component {

    //логика - 7

    state = {
        display:false,
        adress:"",
        url:""
    };

     displayList =()=>{
         const {display} = this.state;
         this.setState({display:!display});
     };

    getUrl = shop =>{
        const{adress, url} = shop;
        this.setState({display:false,adress,url});
    };

    goShop =()=>{
        const {url} = this.state;
        //12
        this.props.history.push('/shop/'+url);
    };

    render() {

        console.log(this.state)

        return (
            <div>
                <div className="main-container-blocks">

                    <AppPreviewBlock />
                    <AppPopularCateg />
                    <AppTovarsSlider />
                    <AppCopyPrevBlock />
                    <AppCompanys />

                    <div className='main-set-shop'>

                        <div className="set-shop-body">

                            <h2>Наши магазины всегда рядом</h2>
                            <p>
                                Вы можете выбрать ближайший к вам магазин и посмотреть наличие товаров в нем,
                                а также при заказе из ближайшего магазина сокращается время доставки!
                            </p>

                            <Button onClick={this.displayList}>
                                {this.state.adress?this.state.adress:'Выбрать магазин'}
                            </Button>

                            {this.state.display?(
                                <Card>
                                    <ListGroup variant="flush">
                                        {listShops.map(shop =>{
                                            return(
                                                <ListGroup.Item
                                                    key={shop.id}
                                                    onClick={() =>this.getUrl(shop)}
                                                >{shop.adress}
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </ListGroup>
                                </Card>
                            ):null}

                            {this.state.adress && !this.state.display?(
                                <Button className='but-select-shop' onClick={this.goShop}>Перейти к магазину</Button>
                            ):null}

                        </div>

                    </div>

                    <AppContactForm />
                </div>


            </div>
        );
    }
}

export default AppMain;