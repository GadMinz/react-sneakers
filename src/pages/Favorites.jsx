import React from 'react';
import Card from "../components/Card";
import {AppContext} from "../App";

const Favorites = ({onAddToCart}) => {
    const {favorites, onAddToFavorite} = React.useContext(AppContext)
    return (
        <div className="content">
            <div className='content-header'>
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers">
                {favorites.map((item, i) => <Card
                    key={item.id + i}
                    onPlus={() => onAddToCart(item)}
                    onFavorite={() => onAddToFavorite(item)}
                    favorited={true}
                    {...item}
                />)}
            </div>
        </div>
    );
};

export default Favorites;
