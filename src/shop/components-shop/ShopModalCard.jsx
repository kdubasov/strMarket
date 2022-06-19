import React,{useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import '../styles-shop/shop-shopModalCard.css'

const ShopModalCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='modal-card-tovar'>
            <Button style={{marginTop:5}} className='open-modal-tovar-button' onClick={handleShow}>
                Подробнее
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <h3>Информация о товаре</h3>
                </Modal.Header>
                <Modal.Body className='body-tovar-modal'>

                    <div className='tovar-modal-img-container'>
                        <img src={props.image} alt={props.nazvanie} />
                    </div>

                    <span className='tovar-modal-info'>
                        <h2>{props.nazvanie}</h2>
                        <p>{props.opisane}</p>
                        <h4>{props.nalichie==='dostupno'?'В наличии':'Нет в наличии'}</h4>
                        <h3>{props.price}р</h3>
                        <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    </span>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ShopModalCard;