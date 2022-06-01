import React from 'react';
import Card from "../components/Card";

const Home = ({items, onChangeSearchItem, searchValue, setSearchValue, onAddToFavorite, onAddToCart}) => {
    return (
        <div className="content">
            <div className='content-header'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="search"/>
                    <input value={searchValue} onChange={onChangeSearchItem} placeholder='Поиск...'/>
                    {searchValue &&
                        <img className='search-block-clear' onClick={() => setSearchValue('')} src="/img/plus.svg"
                             alt='clear'/>}
                </div>
            </div>
            <div className="sneakers">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, i) =>
                    <Card
                        key={item.id + i}
                        onPlus={() => onAddToCart(item)}
                        onFavorite={() => onAddToFavorite(item)}
                        {...item}
                    />)}
            </div>
        </div>
    );
};

export default Home;
