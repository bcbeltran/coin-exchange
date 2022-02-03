import React from 'react';
import Coin from './Coin';
import styled from 'styled-components';

const Div = styled.div`
	margin: 4vw;
	font-size: 2.5vw;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

const formatter = Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

const CoinList = ({
	coinData,
	showBalance,
	handleRefresh,
	handleTransaction,
}) => {
	return (
		<Div>
			<table className="table table-hover">
				<thead>
					<tr className="table-active">
						<th>Name</th>
						<th>Ticker</th>
						<th>Balance</th>
						<th>Price</th>
						<th>Actions</th>
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
								price={formatter.format(coin.price)}
								showBalance={showBalance}
								balance={coin.balance}
								handleRefresh={handleRefresh}
								handleTransaction={handleTransaction}
							/>
						);
					})}
				</tbody>
			</table>
		</Div>
	);
};

export default CoinList;