import React, {Component} from 'react';
import {Button,Form,Row,Col,FloatingLabel} from 'react-bootstrap'
import '../styles-shop/shop-shopRedactAdd.css'

class ShopRedactAdd extends Component {

    //13

    nazvanieRef = React.createRef();
    priceRef = React.createRef();
    opisanieRef = React.createRef();
    nalichieRef = React.createRef();
    imageRef = React.createRef();

    addTovar =(event)=>{
        event.preventDefault()
        const tovar = {
            nazvanie:this.nazvanieRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            opisanie:this.opisanieRef.current.value,
            nalichie:this.nalichieRef.current.value,
            image:this.imageRef.current.value
        }
        console.log('addTovar:',tovar)
        this.props.addTovarMain(tovar)
        event.currentTarget.reset()
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addTovar} className='form-redact-main'>

                    <Row>
                        <Form.Label style={{textAlign:'center'}}>Добавление товара</Form.Label>
                        <Col>
                            <FloatingLabel controlId="floatingPassword" label="Название">
                                <Form.Control ref={this.nazvanieRef} name='nazvanie' type="text" placeholder="Название" />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId="floatingPassword" label="Цена">
                                <Form.Control ref={this.priceRef} name='price' type="text" placeholder="Цена" />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row style={{marginTop:'10px'}}>
                        <Col>
                            <FloatingLabel controlId="floatingTextarea" label="Описание" className="mb-3">
                                <Form.Control ref={this.opisanieRef} name='opisanie' as="textarea" placeholder="Описание" />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row style={{marginTop:'-5px'}}>
                        <Col>
                            <FloatingLabel controlId="floatingSelectGrid" label="Наличие товара:">
                                <Form.Select ref={this.nalichieRef} name='nalichie' aria-label="Floating label select example">
                                    <option value="dostupno">В наличии</option>
                                    <option value="nedostupno">Нет в наличии</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId="floatingPassword" label="Изображение">
                                <Form.Control ref={this.imageRef} name='image' type="text" placeholder="Изображение" />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Button style={{marginTop:'10px'}} variant="outline-success" type="submit">
                        Добавить
                    </Button>
                </Form>
            </div>
        );
    }
}

export default ShopRedactAdd;