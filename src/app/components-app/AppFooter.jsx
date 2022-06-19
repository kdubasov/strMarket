import React from 'react';
import '../styles-app/app-appFooter.css'
import logo from '../images-app/NavbarTop/greenLogo.png';
import {Link} from "react-router-dom";

const AppFooter = () => {
    return (
        <div className='footer-main'>
            <div className="footer-main-container">
                <div className='logo-footer'>
                    <img src={logo} alt={logo} />
                    <h4>Строй маркет</h4>
                </div>

                <div className="spisok-footer">
                    <ul>
                        <li><Link to={'/'}>О нас</Link></li>
                        <li><Link to={'/'}>Контакты</Link></li>
                        <li><Link to={'/'}>Обратная связь</Link></li>
                        <li><Link to={'/'}>Выбрать магазин</Link></li>
                    </ul>
                </div>

                <div className="spisok-footer secondary">
                    <ul>
                        <li><Link to={'/'}>Каталог</Link></li>
                        <li><Link to={'/'}>Акции</Link></li>
                        <li><Link to={'/'}>Отзывы</Link></li>
                        <li><Link to={'/'}>Адреса магазинов</Link></li>
                        <li><Link to={'/'}>Лучшие предложения</Link></li>
                    </ul>
                </div>

                <div className="number-footer">
                    <h4><i className="fa-solid fa-phone" />+79040574145</h4>
                    <p className='small-p'>Всегда на связи</p>
                </div>

                <div className="number-footer email">
                    <h4><i className="fa-solid fa-at" />strmarket@mail.ru</h4>
                    <p className='small-p'>Ответим сразу</p>
                </div>
            </div>

            <div className="footer-main-container bottom">
                <Link className={'small-p'} to={'/'}>Пользовательское соглашение</Link>
                <Link className={'small-p'} to={'/'}>Политика конфиденциальности</Link>
                <p className={'small-p'}>© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</p>
            </div>
        </div>
    );
};

export default AppFooter;