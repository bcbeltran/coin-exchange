import React from 'react';
import Coin from './Coin';

const CoinList = ({coinData}) => {
  return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Ticker</th>
					<th>Price</th>
					<th>Get Current Price</th>
				</tr>
			</thead>
			<tbody>
				{coinData.map((coin) => {
					console.log(coin);
					return (
						<Coin
							key={coin.id}
							name={coin.name}
							ticker={coin.ticker}
							price={coin.price}
						/>
					);
				})}
			</tbody>
		</table>
  );
};

export default CoinList;
