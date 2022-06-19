import React, {Component} from 'react';
import ShopRedactAdd from "./ShopRedactAdd";
import {Button} from "react-bootstrap";
import '../styles-shop/shop-shopRedact.css'
import ShopRedactTovarRedact from "./ShopRedactTovarRedact";

class ShopRedact extends Component {
    render() {
        return (
                <div className='shop-redact-main'>

                    <Button
                        variant='outline-dark'
                        onClick={this.props.loadTovar}
                    >Загрузить товар магазина</Button>

                    <hr />

                    <ShopRedactAdd addTovarMain={this.props.addTovarMain}/>

                    <hr />

                    <div className='flex-redact-tovar-for-forms'>
                        {Object.keys(this.props.tovars).map(key=>{
                            return(
                                    <ShopRedactTovarRedact
                                        key={key}
                                        index={key}
                                        deleteTovarMain={this.props.deleteTovarMain}
                                        tovar={this.props.tovars[key]}
                                        redactTovarMain={this.props.redactTovarMain}
                                    />
                            )
                        })}
                    </div>

                </div>
        );
    }
}

export default ShopRedact;