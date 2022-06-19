import React from 'react';
import '../styles-app/app-appTovarSlider.css'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Card} from "react-bootstrap";
import listTovars from '../../data-shops-items/listTovars'


const AppTovarsSlider = () => {
    return (
        <div className='tovars-slider-app-main'>
            <h2>Популярные товары</h2>

            <Swiper
                slidesPerView={"auto"}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Object.values(listTovars).map(item=>{
                    return(
                        <SwiperSlide key={item.nazvanie}>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <h4>{item.nazvanie}</h4>
                                    <Card.Text className='small-p'>{item.opisanie}</Card.Text>
                                    <h4 className='tovars-slider-app-price'>{item.price} Р</h4>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default AppTovarsSlider;