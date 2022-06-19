import React, {useState} from 'react';
import {Button, Form, ListGroup, Modal,FloatingLabel} from "react-bootstrap";
import listShops from "../../data-shops-items/listShops";
import Fuse from 'fuse.js';
import {Link} from "react-router-dom";
import '../styles-app/app-appNavbarSearch.css'

const AppNavbarSearch = () => {

    const [search,setSearch] = useState('');

    //модальное начало
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //модальное конец

    const fuseSearch = new Fuse(listShops,{
        keys:[
            'adress'
        ],
        includeScore:true
    })

    console.log('fuseSearch - ',fuseSearch)

    const resultSearch = fuseSearch.search(search)

    //console.log('resultSearch - ',resultSearch)

    const characterResultSearch = resultSearch.map(result => result.item)

    function handleOnSearch({currentTarget ={}}){
        const {value} = currentTarget;
        setSearch(value);
    }

    return (
        <div className='nav-top-search-main'>

            <i onClick={handleShow} className="fa-solid fa-magnifying-glass" />

            <Modal show={show} onHide={handleClose} id={'modal-search-nav-top'}>
                <Modal.Header closeButton>
                    <h4>Поиск магазинов</h4>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel label="Введите адрес магазина">
                            <Form.Control
                                type="search"
                                placeholder="Введите адрес магазина"
                                value={search}
                                onChange={handleOnSearch}
                            />
                        </FloatingLabel>
                    </Form>

                    <ListGroup style={{marginTop:'10px'}}>
                        {characterResultSearch.map(shop =>{
                            const { id,url,adress } = shop;
                            return(
                                <Link key={id} to={'/shop/'+url}>
                                    <ListGroup.Item onClick={handleClose} action key={id}>{adress}</ListGroup.Item>
                                </Link>
                            )
                        })}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default AppNavbarSearch;