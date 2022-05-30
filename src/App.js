import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const sneakers = [
    {title: 'Мужские кроссовки Nike Air Max 270', price: 12799, imageUrl: '/img/sneakers/1.jpg'},
    {title: 'Мужские кроссовки Nike Air Max 370', price: 15600, imageUrl: '/img/sneakers/2.jpg'},
    {title: 'Мужские кроссовки Nike Air Max 470', price: 13200, imageUrl: '/img/sneakers/3.jpg'},
    {title: 'Мужские кроссовки Nike Air Max 570', price: 14999, imageUrl: '/img/sneakers/4.jpg'},
]

function App() {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className='content-header'>
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className="sneakers">
                    {sneakers.map((el, i )=> <Card key={i} {...el}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
