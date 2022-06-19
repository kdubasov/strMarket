import React from 'react';
import Slide from "react-reveal/Slide";
import People from '../images-app/CopyPreview/people.png'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const AppCopyPrevBlock = () => {
    return (
        <div className='app-preview-block-main'>
            <Slide left>
                <div className='app-prev-image mobile'>
                    <img alt='people-prev' src={People} />
                </div>
            </Slide>

            <Slide left>
                <div className='app-prev-info'>
                    <h2>Все магазины на одном сайте</h2>
                    <p>
                        Наша компания занимается продажей инструментов,
                        которые не только ускорят процесс строительства,
                        но и сделают его приятнее.
                    </p>
                    <Link to={'/'}><Button>Выбрать магазин</Button></Link>
                </div>
            </Slide>

            <Slide right>
                <div className='app-prev-image'>
                    <img alt='people-prev' src={People} />
                </div>
            </Slide>
        </div>
    );
};

export default AppCopyPrevBlock;