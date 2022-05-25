function App() {
    return (
        <div className="wrapper">
            <header className='header'>
                <div className='header-left'>
                    <img width={40} height={40} src="/img/logo.svg" alt=""/>
                    <div className='header-info'>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className='header-right'>
                    <li className='header-right-cart'>
                        <img width={20} height={20} src="/img/Cart.svg" alt=""/>
                        <span>12312 руб.</span>
                    </li>
                    <li className='header-right-user'>
                        <img width={20} height={20} src="/img/User.svg" alt=""/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>Все кроссовки</h1>
                <div className="sneakers">
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
                        <h5>Мужские кроссовки Lorem ipsum dolor sit amet.</h5>
                        <div className='card-bottom'>
                            <div className='card-bottom-price'>
                                <span>Цена:</span>
                                <b>12999р.</b>
                            </div>
                            <button>
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/2.jpg" alt=""/>
                        <h5>Мужские кроссовки Lorem ipsum dolor sit amet.</h5>
                        <div className='card-bottom'>
                            <div className='card-bottom-price'>
                                <span>Цена:</span>
                                <b>12999р.</b>
                            </div>
                            <button>
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/3.jpg" alt=""/>
                        <h5>Мужские кроссовки Lorem ipsum dolor sit amet.</h5>
                        <div className='card-bottom'>
                            <div className='card-bottom-price'>
                                <span>Цена:</span>
                                <b>12999р.</b>
                            </div>
                            <button>
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/img/sneakers/4.jpg" alt=""/>
                        <h5>Мужские кроссовки Lorem ipsum dolor sit amet.</h5>
                        <div className='card-bottom'>
                            <div className='card-bottom-price'>
                                <span>Цена:</span>
                                <b>12999р.</b>
                            </div>
                            <button>
                                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
