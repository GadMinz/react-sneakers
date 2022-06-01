import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, serCartOpened] = React.useState(false)

    React.useEffect(() => {
        axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/items").then(res => {
            setItems(res.data)
        })
        axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/cart").then(res => {
            setCartItems(res.data)
        })
        axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites").then(res => {
            setFavorites(res.data)
        })
    }, [])

    const onAddToCart = (item) => {
        axios.post("https://6295f6a9810c00c1cb6c47af.mockapi.io/cart", item);
        setCartItems(prev => [...prev, item])
    }

    const onAddToFavorite = async (item) => {
        try {
            if (favorites.find(obj => obj.id === item.id)) {
                axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites/${item.id}`)
            } else {
                const {data} = await axios.post("https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites", item);
                setFavorites(prev => [...prev, data])
            }
        } catch (e) {
            alert('Не удалось добавить в избранное')
        }

    }

    const onRemoveItem = (id) => {
        axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const onChangeSearchItem = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onClose={() => serCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => serCartOpened(true)}/>
            <Routes>
                <Route path='/' element={<Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchItem={onChangeSearchItem}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                />
                } exact/>
                <Route path='/favorites' element={<Favorites
                    items={favorites}
                    onAddToCart={onAddToCart}
                    onAddToFavorite={onAddToFavorite}
                />
                } exact/>
            </Routes>
        </div>
    );
}

export default App;
