import React from 'react';
import styles from './Card.module.scss';

function Card({ id, model, price, onPlus, onFavorit }) {
	const [isAdded, setAdded] = React.useState(false);
	const [isFavorit, setFavorit] = React.useState(false);

	const handleClickPlus = () => {
		onPlus({ id, model, price });
		setAdded(!isAdded);
	};
	const handleClickFavorit = () => {
		onFavorit({ id, model, price });
		setFavorit(!isFavorit);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={handleClickFavorit}>
				<img
					src={isFavorit ? '/img/liked.svg' : '/img/unliked.svg'}
					alt='like'
				/>
			</div>
			<img src={`img/sneakers/${id}.jpg`} alt='img' width={133} height={112} />
			<p>{model}</p>
			<div className={styles.cardBottom}>
				<div className={styles.cardPrice}>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>

				<img
					className={styles.plus}
					onClick={handleClickPlus}
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					alt='plus'
				/>
			</div>
		</div>
	);
}

export default Card;
