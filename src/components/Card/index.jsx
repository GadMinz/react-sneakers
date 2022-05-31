import React from 'react';
import styles from './Card.module.scss'

const Card = ({title, price, imageUrl, onPlus}) => {
    const [isAdded, setIsAdded] = React.useState(false)
    const onClickPlus = () => {
        onPlus()
        setIsAdded(!isAdded)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart.svg" alt="heart"/>
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
