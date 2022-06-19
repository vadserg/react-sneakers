function Header(props) {
	return (
		<header>
			<div className='headerLeft'>
				<img width={40} height={40} src='/img/logo.png' alt='logo' />
				<div className='headerInfo'>
					<h3>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='headerRight'>
				<li className='cartBtn' onClick={props.onClickCart}>
					<img src='img/cart.svg' alt='cart' />
					<span>1205 руб.</span>
				</li>
				<li>
					<img src='img/favorite.svg' alt='favorite' />
				</li>
				<li>
					<img src='img/user.svg' alt='user' />
				</li>
			</ul>
		</header>
	);
}

export default Header;
