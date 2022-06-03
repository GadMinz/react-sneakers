import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = React.createContext({})

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/cart"),
                    axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites"),
                    axios.get("https://6295f6a9810c00c1cb6c47af.mockapi.io/items")
                ])

                setIsLoading(false)

                setCartItems(cartResponse.data)
                setFavorites(favoritesResponse.data)
                setItems(itemsResponse.data)
            } catch (e) {
                alert('Ошибка при запросе данных')
                console.error(e)
            }

        }
        fetchData()
    }, [])

    React.useEffect(() => {
        setTotalPrice(cartItems.reduce((sum, el) => sum + el.price, 0))
    }, [cartItems])

    const onAddToCart = async (item) => {
        try {
            const findItem = cartItems.find((obj) => Number(obj.parentId) === Number(item.id))
            if (findItem) {
                setCartItems(prev => prev.filter(el => Number(el.parentId) !== Number(item.id)))
                await axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/cart/${findItem.id}`)
            } else {
                setCartItems(prev => [...prev, item])
                const {data} = await axios.post("https://6295f6a9810c00c1cb6c47af.mockapi.io/cart", item);
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    }),
                );
            }
        } catch (e) {
            alert('Ошибка добавления в корзину')
            console.error(e)
        }

    }

    const onAddToFavorite = async (item) => {
        try {
            if (favorites.find(obj => obj.id === item.id)) {
                setFavorites(prev => prev.filter(el => Number(el.id) !== Number(item.id)))
                await axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites/${item.id}`)
            } else {
                const {data} = await axios.post("https://6295f6a9810c00c1cb6c47af.mockapi.io/favorites", item);
                setFavorites(prev => [...prev, data])
            }
        } catch (e) {
            alert('Не удалось добавить в избранное')
            console.error(e)
        }

    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://6295f6a9810c00c1cb6c47af.mockapi.io/cart/${id}`)
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
        } catch (e) {
            alert('Ошибка удаления из корзины')
            console.error(e)
        }
    }

    const onChangeSearchItem = (e) => {
        setSearchValue(e.target.value)
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.parentId) === Number(id))
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            onAddToFavorite,
            onAddToCart,
            setCartOpened,
            setCartItems,
            totalPrice
        }}>
            <div className="wrapper">
                <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}
                        opened={cartOpened}/>
                <Header totalPrice={totalPrice} onClickCart={() => setCartOpened(true)}/>
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
                    <Route path='/orders' element={<Orders
                        onAddToCart={onAddToCart}
                    />
                    } exact/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
