import React, {useState} from 'react';
import '../styles-shop/shop-shopChat.css'
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import {contactFormStrMarket} from "../../base";

const ShopChat = () => {

    const [display,setDisplay] = useState('none')
    const closeChat = () =>{
        setDisplay('none')
    }
    const openChat = () =>{
        setDisplay('block')
    }

    //patterns
    const namePattern = "[а-яА-Я]{3,15}";
    const emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}";

    //форма
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

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
        closeChat()
    };

    return (
        <div>
            <button className="open-button" onClick={openChat}>
                <img src="https://lh3.googleusercontent.com/-0rD58cJntp0/YW0jGHGjvOI/AAAAAAAAAIU/AgjPUnvG83kvIcMStWNXHl-Poz67alffACLcBGAsYHQ/chat.gif" />
            </button>

            <div className="chat-popup" style={{display:display}} id="myForm">
                <Form className='form-container' onSubmit={handleSubmit}>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Ваше сообщение отправлено</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Скоро с вами свяжутся наши сотрудники.</Modal.Body>
                    </Modal>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h3>Появились вопросы?</h3>
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
                    </Form.Group>

                    {name&&email?
                        <Button
                            variant={loader?'dark':'primary'}//проверяем на состояние отправки
                            type="submit"
                            className='send-popup'
                        >
                            {loader?'Отправляется':'Отправить'}
                        </Button>
                        :
                        <Button
                            variant={"dark"}
                            type="submit"
                            className='send-popup'
                            disabled
                        >
                            {loader?'Отправляется':'Отправить'}
                        </Button>
                    }
                    <Button onClick={closeChat} variant={"danger"}>Закрыть</Button>

                </Form>
            </div>
        </div>
    );
};

export default ShopChat;