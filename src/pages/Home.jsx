import React from 'react';
import Card from "../components/Card";

const Home = ({
                  items,
                  onChangeSearchItem,
                  searchValue,
                  setSearchValue,
                  isLoading,
                  onAddToFavorite,
                  onAddToCart
              }) => {
    const renderItems = () => {
        return (isLoading
            ? [...Array(8)]
            : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())))
            .map((item, i) =>
                <Card
                    key={i}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
                />)
    }

    return (
        <div className="content">
            <div className='content-header'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    <input value={searchValue} onChange={onChangeSearchItem} placeholder='Поиск...'/>
                    {searchValue &&
                        <img className='search-block-clear' onClick={() => setSearchValue('')} src="img/plus.svg"
                             alt='clear'/>}
                </div>
            </div>
            <div className="sneakers">
                {renderItems()}
            </div>
        </div>
    );
};

export default Home;
