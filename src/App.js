import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({})

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            const cartResponse = await axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/cart")
            const favoritesResponse = await axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites")
            const itemsResponse = await axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/items")

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }
        fetchData()
    }, [])

    const onAddToCart = (item) => {
        try {
            if (cartItems.find(obj => Number(obj.id) === Number(item.id))) {
                axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/cart/${item.id}`)
                setCartItems(prev => prev.filter(el => Number(el.id) !== Number(item.id)))
            } else {
                axios.post("https://6295f6a9810c00c1cb6c47af.mockapi.io/cart", item);
                setCartItems(prev => [...prev, item])
            }
        } catch (e) {
            alert('Ошибка добавления в корзину')
        }

    }

    const onAddToFavorite = async (item) => {
        try {
            if (favorites.find(obj => obj.id === item.id)) {
                axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites/${item.id}`)
                setFavorites(prev => prev.filter(el => Number(el.id) !== Number(item.id)))
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

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
            <div className="wrapper">
                {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
                <Header onClickCart={() => setCartOpened(true)}/>
                <Routes>
                    <Route path='/' element={<Home
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchItem={onChangeSearchItem}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                        cartItems={cartItems}
                        isLoading={isLoading}
                    />
                    } exact/>
                    <Route path='/favorites' element={<Favorites
                        onAddToCart={onAddToCart}
                    />
                    } exact/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
