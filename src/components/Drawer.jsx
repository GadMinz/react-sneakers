import React from 'react';

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className='cart-title'>
                    Корзина
                    <img className='remove-btn' src="/img/btn-remove.svg" alt="Remove"/>
                </h2>
                <div className="cart">
                    <div className="cart-item">
                        <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img">
                        </div>
                        <div className='cart-item-info'>
                            <p>Мужские кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='remove-btn' src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cart-total">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 213 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className='green-button'>Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
