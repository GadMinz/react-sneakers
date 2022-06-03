import React from 'react';
import Card from "./Card";

const Order = ({id, items}) => {
    return (
        <div className='order'>
            <h2>Заказ #{id}</h2>
            <div className="sneakers">
                {items.map((item,i) => <Card key={i} {...item} />)}
            </div>
        </div>
    );
};

export default Order;
