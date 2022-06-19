import React from 'react';
import {Nav,NavDropdown,Navbar,Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../styles-app/app-appNavbar.css';
import AppNavbarSearch from "./AppNavbarSearch";
import favicon from '../images-app/NavbarTop/greenLogo.png';

const AppNavbar = () => {
    return (
        <div>

            <Navbar expand="lg">
                <Container>
                    <div className="container-ugl-nav-top just-left-dekstop">
                        <Nav className='main-links-nav-top'>
                            <Link to='/about'>О нас</Link>
                            <Link to='/contacts'>Контакты</Link>
                        </Nav>
                    </div>

                    <div className="container-ugl-nav-top just-left-planshet">
                        <NavDropdown title="Меню" id="basic-nav-dropdown">
                            <NavDropdown.Item>О нас</NavDropdown.Item>
                            <NavDropdown.Item>Контакты</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Найти магазин</NavDropdown.Item>
                        </NavDropdown>
                    </div>

                        <Navbar.Brand>
                            <Link className={'link-logo-nav-top'} to={'/'}>
                                <img
                                    alt="СтройМаркет"
                                    src={favicon}
                                />{' '}
                            </Link>
                        </Navbar.Brand>

                    <div className="container-ugl-nav-top just-right">
                        <AppNavbarSearch />
                    </div>
                </Container>
            </Navbar>

        </div>
    );
};

export default AppNavbar;