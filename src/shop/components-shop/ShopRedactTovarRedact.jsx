import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import '../styles-shop/shop-shopRedactTovarRedact.css'

class ShopRedactTovarRedact extends Component {

    //21 - this file

    //функция для редактирование товара
    redactFormControlTovar =(event)=>{

        const redactTovar = {
            ...this.props.tovar,
            [event.currentTarget.name]:event.currentTarget.value//меняем поле на новое
        }

        //передаем обновленный товар в функцию на главной странице
        this.props.redactTovarMain(this.props.index, redactTovar)

        console.log('redact tovar - ',redactTovar)
    }

    render() {
        return (
            <div>
                <Form className='redact-tovar-form-main'>

                    <Row>
                        <Form.Label style={{textAlign:'center'}}>Редактирование товара</Form.Label>
                        <Col>
                            <Form.Control
                                onChange={this.redactFormControlTovar}
                                value={this.props.tovar.nazvanie}
                                name='nazvanie'
                                type="text"
                                placeholder="Название"
                            />
                        </Col>

                        <Col>
                            <Form.Control
                                onChange={this.redactFormControlTovar}
                                value={this.props.tovar.price}
                                name='price'
                                type="text"
                                placeholder="Цена"
                            />
                        </Col>
                    </Row>

                    <Row style={{marginTop:'5px'}}>
                        <Col>
                            <Form.Control
                                onChange={this.redactFormControlTovar}
                                value={this.props.tovar.opisanie}
                                name='opisanie'
                                as="textarea"
                                placeholder="Описание"
                            />
                        </Col>
                    </Row>

                    <Row style={{marginTop:'5px'}}>
                        <Col>
                            <Form.Select onChange={this.redactFormControlTovar} value={this.props.tovar.nalichie} name='nalichie' aria-label="Floating label select example">
                                <option value="dostupno">В наличии</option>
                                <option value="nedostupno">Нет в наличии</option>
                            </Form.Select>
                        </Col>

                        <Col>
                            <Form.Control
                                onChange={this.redactFormControlTovar}
                                value={this.props.tovar.image}
                                name='image'
                                type="text"
                                placeholder="Изображение"
                            />
                        </Col>
                    </Row>

                    <Button
                        style={{marginTop:'5px'}}
                        onClick={()=> this.props.deleteTovarMain(this.props.index)}
                        variant="outline-danger"
                        type="submit"
                    >
                        Удалить товар
                    </Button>

                </Form>
            </div>
        );
    }
}

export default ShopRedactTovarRedact;