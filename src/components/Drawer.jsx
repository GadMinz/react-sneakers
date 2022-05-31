import React from 'react';

const Drawer = ({items, onClose}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='cart-title'>
                    Корзина
                    <img onClick={onClose} className='remove-btn' src="/img/btn-remove.svg" alt="Remove"/>
                </h2>
                <div className="cart">
                    {items.map((el, i ) => (
                        <div key={i} className="cart-item">
                            <div style={{backgroundImage: `url(${el.imageUrl})`}} className="cart-item-img">
                            </div>
                            <div className='cart-item-info'>
                                <p>{el.title}</p>
                                <b>{el.price} руб.</b>
                            </div>
                            <img className='remove-btn' src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                    ))}
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
