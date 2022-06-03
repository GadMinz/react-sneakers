import React from 'react';
import {Link} from "react-router-dom";

const Header = ({onClickCart, totalPrice}) => {
    return (
        <header className='header'>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <div className='header-left'>
                    <img width={40} height={40} src="img/logo.svg" alt=""/>
                    <div className='header-info'>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className='header-right'>
                <li onClick={onClickCart} className='header-right-cart'>
                    <img width={20} height={20} src="img/Cart.svg" alt="Cart"/>
                    <span>{totalPrice} руб.</span>
                </li>
                <li className='header-right-favorite'>
                    <Link to={process.env.PUBLIC_URL + '/favorites'}>
                        <img width={20} height={20} src="img/heart.svg" alt="Heart"/>
                    </Link>
                </li>
                <li className='header-right-user'>
                    <Link to={process.env.PUBLIC_URL + '/orders'}>
                        <img width={20} height={20} src="img/User.svg" alt="User"/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
