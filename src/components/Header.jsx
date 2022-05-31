import React from 'react';

const Header = ({onClickCart}) => {
    return (
        <header className='header'>
            <div className='header-left'>
                <img width={40} height={40} src="/img/logo.svg" alt=""/>
                <div className='header-info'>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='header-right'>
                <li onClick={onClickCart} className='header-right-cart'>
                    <img width={20} height={20} src="/img/Cart.svg" alt=""/>
                    <span>12312 руб.</span>
                </li>
                <li className='header-right-user'>
                    <img width={20} height={20} src="/img/User.svg" alt=""/>
                </li>
            </ul>
        </header>
    );
};

export default Header;
