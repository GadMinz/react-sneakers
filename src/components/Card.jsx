import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart.svg" alt="heart"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Lorem ipsum dolor sit amet.</h5>
            <div className='card-bottom'>
                <div className='card-bottom-price'>
                    <span>Цена:</span>
                    <b>12999р.</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
};

export default Card;
