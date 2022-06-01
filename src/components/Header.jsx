import React from 'react';
import {Link} from "react-router-dom";

const Header = ({onClickCart}) => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='header-left'>
                    <img width={40} height={40} src="/img/logo.svg" alt=""/>
                    <div className='header-info'>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className='header-right'>
                <li onClick={onClickCart} className='header-right-cart'>
                    <img width={20} height={20} src="/img/Cart.svg" alt="Cart"/>
                    <span>12312 руб.</span>
                </li>
                <li className='header-right-favorite'>
                    <Link to='favorites'>
                        <img width={20} height={20} src="/img/heart.svg" alt="Heart"/>
                    </Link>
                </li>
                <li className='header-right-user'>
                    <img width={20} height={20} src="/img/User.svg" alt="User"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;
