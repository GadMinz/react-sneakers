import React from 'react';
import {AppContext} from "../App";

const Info = ({title, description, image}) => {
    const {setCartOpened} = React.useContext(AppContext)
    return (
        <div className="cart-empty">
            <img className='cart-empty-icon' src={image} alt="image-info"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className='green-button'>
                <img src="img/arrow.svg" alt="Arrow"/>Вернуться назад
            </button>
        </div>
    );
};

export default Info;
