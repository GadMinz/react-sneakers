import React from 'react';
import styles from './Card.module.scss'

const Card = ({title, price, imageUrl}) => {
    const onClickButton = () => {
      alert('fas')
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
                <button onClick={onClickButton}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
};

export default Card;
