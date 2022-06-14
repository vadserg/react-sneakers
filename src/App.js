import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
	return (
		<div className='wrapper'>
			<Drawer display='none' />
			<Header />

			<div className='content'>
				<div className='contentInfo'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>

				<div className='cardsRow'>
					<Card />

					<div className='card'>
						<div className='favorite'>
							<img src='img/unliked.svg' alt='like' />
						</div>
						<img src='img/sneakers/2.jpg' alt='img' width={133} height={112} />
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

					<Card />

					<div className='card'>
						<div className='favorite'>
							<img src='img/unliked.svg' alt='like' />
						</div>
						<img src='img/sneakers/4.jpg' alt='img' width={133} height={112} />
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
				</div>
				{/* end of cardsRow */}
			</div>
		</div>
	);
}

export default App;
