import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

//18

class ShopDostavka extends Component {
    render() {
        //параметры доставки
        let {summaZakaza} = this.props
        let defaultDostavkaPrice = 500
        let freeDostavkaPrice = 0
        let dostavkaPrice = summaZakaza > 0 && summaZakaza < 5000 ? defaultDostavkaPrice : freeDostavkaPrice;

        return (
            <div>
                <p>{summaZakaza<5000?`Закажите еще на ${5000-summaZakaza}р для бесплатной доставки.`:null}</p>
                {summaZakaza<5000?<hr />:null}
                <p>Доставка: {summaZakaza>0?dostavkaPrice:null}р</p>
                <hr />
                <p>Товар: {summaZakaza}р</p>
                <hr />
                <Alert.Heading>Всего за заказ: {summaZakaza+dostavkaPrice}р</Alert.Heading>
            </div>
        );
    }
}

export default ShopDostavka;