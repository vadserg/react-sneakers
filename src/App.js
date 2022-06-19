import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
	const [cartOpened, setCartOpened] = React.useState(false);
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favoritItems, setFavoritItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://62af03f03bbf46a3521a4c67.mockapi.io/items')
			.then(res => res.json())
			.then(data => {
				setItems(data);
			});
	}, []);

	const addToCart = good => {
		if (cartItems.find(item => item.id === good.id)) {
			let index = cartItems.findIndex(item => item.id === good.id);
			cartItems.splice(index, 1);
			setCartItems(cartItems);
		} else {
			setCartItems(prev => [...prev, good]);
		}

		console.log(cartItems);
	};

	const addToFavorit = good => {
		if (favoritItems.find(item => item.id === good.id)) {
			const index = favoritItems.findIndex(item => item.id === good.id);
			favoritItems.splice(index, 1);
		} else {
			favoritItems.push(good);
		}

		setFavoritItems(favoritItems);
		//console.log(favoritItems);
	};

	const deleteCartItem = id => {
		const index = cartItems.findIndex(item => item.id === id);
		cartItems.splice(index, 1);
		setCartItems(cartItems);
		console.log(cartItems);
	};

	return (
		<div className='wrapper'>
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onDeleteItem={obj => deleteCartItem(obj)}
				/>
			)}
			<Header onClickCart={() => setCartOpened(true)} />

			<div className='content'>
				<div className='contentInfo'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>

				<div className='cards'>
					{items.map(item => (
						<Card
							key={item.id}
							{...item}
							onPlus={obj => addToCart(obj)}
							onFavorit={obj => addToFavorit(obj)}
						/>
					))}
				</div>
				{/* end of cardsRow */}
			</div>
		</div>
	);
}

export default App;
