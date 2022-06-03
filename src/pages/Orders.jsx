import React from 'react';
import Card from "../components/Card";
import axios from "axios";
import Order from "../components/Order";

const Orders = () => {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/orders/")
                setOrders(data)
                setIsLoading(false)
            } catch (e) {
                alert('Ошибка при запросе заказов')
            }
        })()

    }, [])

    return (
        <div className="content">
            <div className='content-header'>
                <h1>Мои Заказы</h1>
            </div>
            <div className="orders">
                {(isLoading
                    ? [...Array(8)].map((item, i) => <Card key={i} loading={isLoading}/>)
                    : orders.map((el, i) => <Order key={i} isLoading={isLoading} {...el}/>))}
            </div>
        </div>
    );
};

export default Orders;
