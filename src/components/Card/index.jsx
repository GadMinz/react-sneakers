import React from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";

const Card = ({id, title, price, imageUrl, onPlus, onFavorite, favorited = false, loading = false}) => {
    const {isItemAdded} = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading
                ? <ContentLoader
                    speed={2}
                    width={155}
                    height={230}
                    viewBox="0 0 155 230"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="110"/>
                    <rect x="0" y="132" rx="5" ry="5" width="155" height="15"/>
                    <rect x="0" y="158" rx="5" ry="5" width="100" height="15"/>
                    <rect x="0" y="189" rx="5" ry="5" width="80" height="25"/>
                    <rect x="124" y="184" rx="10" ry="10" width="32" height="32"/>
                </ContentLoader>
                : <>
                    <div className={styles.favorite}>
                        {onFavorite &&
                            <img onClick={onClickFavorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                                 alt="liked"/>}
                    </div>
                    <img width={133} height={112} src={imageUrl} alt=""/>
                    <h5>{title}</h5>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardBottomPrice}>
                            <span>Цена:</span>
                            <b>{price}р.</b>
                        </div>
                        {onPlus && <img className={styles.plus} onClick={onClickPlus}
                                        src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                                        alt="Checked"/>}
                    </div>
                </>
            }

        </div>
    );
};

export default Card;
