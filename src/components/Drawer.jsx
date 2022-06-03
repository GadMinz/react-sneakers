import React from 'react';
import Info from "./Info";
import {AppContext} from "../App";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({items, onClose, onRemove, opened}) => {
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false)
    const [orderId, setOrderId] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const {setCartItems, totalPrice} = React.useContext(AppContext)

    const onClickOrder = async () => {
        setIsLoading(true)
        try {
            const {data} = await axios.post("https://6295f6a9810c00c1cb6c47af.mockapi.io/orders", {items})
            setOrderId(data.id)
            setIsOrderCompleted(true)
            setCartItems([])

            for (const item of items) {
                await axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/cart/${item.id}`)
                await delay(1000)
            }
        } catch (e) {
            alert('Не удалось создать заказ')
        }
        setIsLoading(false)
    }

    return (
        <div className={`overlay ${opened ? `visible` : ''}`}>
            <div className="drawer">
                <h2 className='cart-title'>
                    Корзина
                    <img onClick={onClose} className='remove-btn' src="/img/btn-remove.svg" alt="Remove"/>
                </h2>

                {items.length > 0
                    ? <div className='cart-wrapper'>
                        <div className="cart">
                            {items.map((el, i) => (
                                <div key={i} className="cart-item">
                                    <div style={{backgroundImage: `url(${el.imageUrl})`}} className="cart-item-img">
                                    </div>
                                    <div className='cart-item-info'>
                                        <p>{el.title}</p>
                                        <b>{el.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(el.id)} className='remove-btn'
                                         src="/img/btn-remove.svg"
                                         alt="Remove"/>
                                </div>
                            ))}
                        </div>
                        <div className="cart-total">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice * 0.05).toFixed(2)} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className='green-button'>Оформить заказ <img
                                src="/img/arrow.svg" alt="Arrow"/>
                            </button>
                        </div>
                    </div>
                    : <Info title={isOrderCompleted ? 'Заказ оформлен!' : 'В корзине нет товаров'}
                            description={isOrderCompleted ? `Ваш заказ №${orderId} оформлен!` : 'Найдите то, что вам нужно в каталоге'}
                            image={isOrderCompleted ? '/img/completed-order.svg' : "/img/empty-cart.svg"}/>
                }
            </div>
        </div>
    );
};

export default Drawer;
