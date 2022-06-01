import React from 'react';
import styles from './Card.module.scss'

const Card = ({title, price, imageUrl, onPlus, onFavorite, favorited = false}) => {
    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const onClickPlus = () => {
        onPlus()
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onFavorite()
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickFavorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="liked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=""/>
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardBottomPrice}>
                    <span>Цена:</span>
                    <b>{price}р.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}
                     src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt={isAdded ? "Checked" : "Plus"}/>
            </div>
        </div>
    );
};

export default Card;
