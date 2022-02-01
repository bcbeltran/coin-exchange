import React, { Component } from 'react';
import Coin from './Coin';

export default class CoinList extends Component {

	render() {
		
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
					{this.props.coinData.map((coin) => {
						return (
							<Coin
								key={coin.id}
								name={coin.name}
								ticker={coin.ticker}
								price={coin.price}
								showBalance={this.props.showBalance}
								balance={coin.balance}
								handleRefresh={this.props.handleRefresh}
							/>
						);
					})}
				</tbody>
			</table>
		);
	}
	
			
};
