import React from 'react';
import Coin from './Coin';

const CoinList = ({coinData, showBalance, handleRefresh}) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Ticker</th>
					<th>Balance</th>
					<th>Price</th>
					<th>Get Current Price</th>
				</tr>
			</thead>
			<tbody>
				{coinData.map((coin) => {
					return (
						<Coin
							key={coin.id}
							tickerId={coin.id}
							name={coin.name}
							ticker={coin.ticker}
							price={coin.price}
							showBalance={showBalance}
							balance={coin.balance}
							handleRefresh={handleRefresh}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default CoinList;