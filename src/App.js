import React from 'react';
import "./App.css";
import Header from './components/Header';
import CoinList from './components/CoinList';
import AccountBalance from './components/AccountBalance';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			balance: 10000,
			coinData: [
				{
					id: uuidv4(),
					name: "Bitcoin",
					ticker: "BTC",
					price: 38000,
				},
				{
					id: uuidv4(),
					name: "XRP",
					ticker: "XRP",
					price: 0.75,
				},
				{
					id: uuidv4(),
					name: "Cardano",
					ticker: "ADA",
					price: 1.6,
				},
				{
					id: uuidv4(),
					name: "USDC",
					ticker: "USDC",
					price: 1.0,
				},
			],
		};
	}

	render() {
		
		return (
			<div className="App">
				<Header />
				<hr />
				<AccountBalance amount={this.state.balance} />
				<CoinList coinData={this.state.coinData} />
			</div>
		);
	}
}

export default App;
