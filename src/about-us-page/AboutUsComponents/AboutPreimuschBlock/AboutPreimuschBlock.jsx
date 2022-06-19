import React from 'react';
import AboutPreimuschBlockData from "./AboutPreimuschBlockData";
import {Card} from "react-bootstrap";
import '../../AboutUsStyles/AboutPreimuschBlock.css';

const AboutPreimuschBlock = () => {
    return (
        <div className='about-preim-main'>
            <h2>Наши преимущества:</h2>
            {AboutPreimuschBlockData.map(el=>{
                return(
                    <Card key={el.id}>
                        <Card.Img variant="top" src={el.img} />
                        <Card.Body>
                            <h4>{el.title}</h4>
                            <p>{el.descr}</p>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
};

export default AboutPreimuschBlock;