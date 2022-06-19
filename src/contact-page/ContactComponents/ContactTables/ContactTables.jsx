import React from 'react';
import {Table} from "react-bootstrap";
import '../../ContactStyles/ContactTables.css'

const ContactTables = () => {
    return (
        <div className='contact-table'>
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Телефон</td>
                    <td>+7 (904) 057-41-45</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Электронная почта</td>
                    <td>cergocergo41@gmail.com</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Юридический адрес</td>
                    <td>г.Нижний Новогород ул.Белинского д.57</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Физический адрес</td>
                    <td>г.Нижний Новогород ул.Советская д.122</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Основной сайт:</td>
                    <td>https://github.com/kdubasov</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>ИНН</td>
                    <td>5984 4357 2347 4634 4532</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ContactTables;