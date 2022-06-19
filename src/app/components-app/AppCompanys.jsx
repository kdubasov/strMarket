import React from 'react';
import '../styles-app/app-appCompanys.css'
import companysSlider from "../data-app/companysSlider";

const AppCompanys = () => {
    return (
        <div className='app-companys-main'>
            <h2>Мы сотрудничаем со многими компаниями</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Enim iusto nam obcaecati quibusdam quidem sapiente tempora unde vel.
                Aspernatur consequuntur, dolores est ex labore magni optio reprehenderit
                sapiente similique unde?
            </p>

            <div className="slider-companys">
                <div className="slide-track-companys">
                    {Object.values(companysSlider).map(item=>{
                        return(
                            <div key={item.id} className="slide-companys">
                                <img
                                    src={item.img}
                                    height="100"
                                    width="250"
                                    alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default AppCompanys;