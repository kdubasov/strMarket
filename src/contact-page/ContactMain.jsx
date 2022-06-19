import React from 'react';
import './ContactStyles/ContactMain.css'
import AppContactForm from "../app/components-app/AppContactForm";
import ContactListShop from "./ContactComponents/ContactListShop/ContactListShop";
import ContactTables from "./ContactComponents/ContactTables/ContactTables";

const ContactMain = () => {
    return (
        <div className='main-container-blocks'>
            <h2 className='h2-contact-top'>Контакты</h2>

            <ContactTables />
            <ContactListShop />
            <AppContactForm />
        </div>
    );
};

export default ContactMain;