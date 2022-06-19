import React from 'react';
import '../styles-app/app-appPreviewBlock.css'
import {Button} from "react-bootstrap";
import City from '../images-app/PreviewBlock/City.png'
import {Link} from "react-router-dom";
import Slide from 'react-reveal/Slide';

const AppPreviewBlock = () => {
    return (
        <div className='app-preview-block-main'>
            <Slide left>
                <div className='app-prev-image mobile'>
                    <img alt='city-prev' src={City} />
                </div>
            </Slide>

            <Slide left>
                <div className='app-prev-info'>
                    <h2>Создавайте новое с нашей помощью</h2>
                    <p>
                        Наша компания занимается продажей инструментов,
                        которые не только ускорят процесс строительства,
                        но и сделают его приятнее.
                    </p>
                    <Link to={'/'}><Button>О нас</Button></Link>
                </div>
            </Slide>

            <Slide right>
                <div className='app-prev-image'>
                    <img alt='city-prev' src={City} />
                </div>
            </Slide>
        </div>
    );
};

export default AppPreviewBlock;