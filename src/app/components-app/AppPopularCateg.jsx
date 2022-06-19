import React from 'react';
import '../styles-app/app-appPopularCateg.css'
import {Card} from "react-bootstrap";
import popularCateg from "../data-app/popularCateg";

const AppPopularCateg = () => {
    return (
        <div className='app-popular-categ-main'>
            <h2>Наши преимущества</h2>

            {popularCateg.map(item=>{
                return(
                    <Card key={item.id} className='card-popul-categ'>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <h4>{item.title}</h4>
                            <p className='small-p'>{item.text}</p>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
};

export default AppPopularCateg;