import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, serCartOpened] = React.useState(false)

    React.useEffect(() => {
        axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/items").then(res => {
            setItems(res.data)
        })
    }, [])

    const onAddToCart = (item) => {
        setCartItems(prev => [...prev, item])
    }
    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onClose={() => serCartOpened(false)}/>}
            <Header onClickCart={() => serCartOpened(true)}/>
            <div className="content">
                <div className='content-header'>
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className="sneakers">
                    {items.map((item, i) => <Card
                        key={item.id + i}
                        onPlus={() => onAddToCart(item)}
                        onFavorite={() => console.log('favorite')}
                        {...item}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default App;
