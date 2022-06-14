function Drawer(props) {
	return (
		<div style={{ display: props.display }} className='overlay'>
			<div className='drawer'>
				<h2>
					Корзина
					<img className='removeBtn' src='img/close.svg' alt='close' />
				</h2>
				<div className='cart'>
					<div className='cartItem'>
						<img
							width={70}
							height={70}
							src='img/sneakers/2.jpg'
							alt='sneakers'
						/>
						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<span>12 999 руб.</span>
						</div>
						<img className='removeBtn' src='img/close.svg' alt='close' />
					</div>
				</div>
				{/* end of cart */}
				<div className='cartInfo'>
					<ul>
						<li>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб. </b>
						</li>
						<li>
							<span>Налог 5%:</span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					<button className='greenButton'>
						Оформить заказ
						<img src='img/arrow.svg' alt='arrow'></img>
					</button>
				</div>
				{/* end of cartInfo */}
			</div>
		</div>
	);
}

export default Drawer;
