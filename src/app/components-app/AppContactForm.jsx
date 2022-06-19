import React, { useState } from "react";
import { contactFormStrMarket } from "../../base";
import {Form,Button,FloatingLabel,Modal} from "react-bootstrap";
import '../styles-app/app-appContactForm.css'
import Slide from 'react-reveal/Slide';

//форма обратной связи на главной - в базе - contactFormStrMarket
//валидация с бутстрапом

const AppContactForm = () => {

    //patterns
    const namePattern = "[а-яА-Я]{3,15}";
    const emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}";

    //форма
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    //стейт для кнопки
    const [loader, setLoader] = useState(false);

    //стейт для modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);//изменяем состояние отправки при нажатии на кнопку

        contactFormStrMarket.collection("users-messages")//название коллекции
            .add({
                //поля ввода данных для записи
                name: name,
                email: email,
                text: text,
            })
            .then(() => {
                setLoader(false);
                //alert("Ваше сообщение отправлено 👍");//вывод если все ок
                setShow(true)//вместо алерта выводим modal меняя его значение в стейте чтобы показывалось
            })
            .catch((error) => {
                alert(error.message);//вывод ошибок
                setLoader(false);
            });

        setName("");
        setEmail("");
        setText("");
    };

    //валидация


    return (
        <Slide right>
            <div className='app-contact-form-main'>
                <Form className='contact-form-form-main-form' onSubmit={handleSubmit}>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Ваше сообщение отправлено</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Скоро с вами свяжутся наши сотрудники.</Modal.Body>
                    </Modal>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h2>Появились вопросы?</h2>
                        <p className='small-p'>Вы можете заполнить данную форму и наши операторы свяжутся с вами в ближайшее время</p>
                        <FloatingLabel controlId="floatingPassword" label="Введите ваше имя">
                            <Form.Control
                                type="text"
                                placeholder="Введите ваше имя"
                                pattern = {namePattern.toString()}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Введите ваш емаил">
                            <Form.Control
                                type="email"
                                placeholder="Введите ваш емаил"
                                pattern = {emailPattern.toString()}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Введите сообщение">
                            <Form.Control
                                as="textarea"
                                placeholder="Введите сообщение"
                                pattern ={emailPattern.toString()}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    {name&&email?
                        <Button
                            variant={loader?'dark':'primary'}//проверяем на состояние отправки
                            type="submit"
                        >
                            {loader?'Отправляется':'Отправить'}
                        </Button>
                        :
                        <Button
                            variant={"dark"}
                            type="submit"
                            disabled
                        >
                            {loader?'Отправляется':'Отправить'}
                        </Button>
                    }

                </Form>
            </div>
        </Slide>
    );
};

export default AppContactForm;