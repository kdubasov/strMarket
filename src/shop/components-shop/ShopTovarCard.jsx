import React, {Component} from 'react';
import '../styles-shop/shop-shopTovarCard.css'
import {Card, ListGroupItem, ListGroup, Button} from "react-bootstrap";
import ShopModalCard from "./ShopModalCard";

class ShopTovarCard extends Component {

    //16
    addKorzinaCard =()=>{
        console.log('addKorzinaCard - ',this.props.index)
        this.props.addKorzinaMain(this.props.index)
    }

    render() {

        //15
        const image = this.props.details.image;
        const nazvanie = this.props.details.nazvanie;
        const price = this.props.details.price;
        const opisanie = this.props.details.opisanie;
        const nalichie = this.props.details.nalichie;

        return (
            <Card className={'tovar-card-main'}>
                <Card.Img style={{marginTop:'10px'}} variant="top" alt={nazvanie} src={image} />
                <Card.Body>
                    <h4>{nazvanie}</h4>
                    {/*<Card.Text>{opisanie}</Card.Text>*/}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <p>{price}р</p>
                        <p>{nalichie === 'dostupno'?'В наличии':'Нет в наличии'}</p>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    {nalichie === 'dostupno'?(
                        <Button className='add-korz-button' onClick={this.addKorzinaCard}>
                            Добавить в корзину {this.props.korzina[this.props.index]?'+'+this.props.korzina[this.props.index]:''}
                        </Button>
                    ):(
                        <Button variant='outline-danger' disabled>Нет в наличии</Button>
                    )}

                    <ShopModalCard
                        image={image}
                        nazvanie={nazvanie}
                        price={price}
                        opisane={opisanie}
                        nalichie={nalichie}
                    />

                </Card.Body>
            </Card>
        );
    }
}

export default ShopTovarCard;