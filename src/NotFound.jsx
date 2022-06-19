import React from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Slide';

const NotFound = () => {
    return (
        <div className='notfound-page-main'>
            <Fade>
                <h1>404</h1>
                <h3>
                    Данная страница не существует, пожалуйста,
                    перейдите на
                    <Link to={'/'}> Главную страницу</Link>
                </h3>
            </Fade>
        </div>
    );
};

export default NotFound;