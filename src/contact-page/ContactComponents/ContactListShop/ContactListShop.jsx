import React from 'react';
import {ListGroup} from "react-bootstrap";
import listShops from "../../../data-shops-items/listShops";
import '../../ContactStyles/ContactListShop.css'

const ContactListShop = () => {
    return (
        <div className='contact-list-shops'>
            <h3>Адреса наших магазинов:</h3>
            <ListGroup as='ol' numbered>
                {listShops.map(el=>{
                    return(
                        <ListGroup.Item as='li' key={el.id}>{el.adress}</ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    );
};

export default ContactListShop;