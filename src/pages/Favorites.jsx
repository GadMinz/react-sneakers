import React from 'react';
import Card from "../components/Card";

const Favorites = ({items, onAddToCart, onAddToFavorite}) => {
    return (
        <div className="content">
            <div className='content-header'>
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers">
                {items.map((item, i) => <Card
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
