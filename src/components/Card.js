function Card() {
	return (
		<div className='card'>
			<div className='favorite'>
				<img src='img/liked.svg' alt='like' />
			</div>
			<img src='img/sneakers/1.jpg' alt='img' width={133} height={112} />
			<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
			<div className='cardBottom'>
				<div className='cardPrice'>
					<span>Цена:</span>
					<b>12 999 руб.</b>
				</div>
				<button className='btnAdd'>
					<img src='/img/plus.svg' alt='plus' width={11} height={11} />
				</button>
			</div>
		</div>
	);
}

export default Card;
