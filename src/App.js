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
		this.handleRefresh = this.handleRefresh.bind(this);
	}
	
	handleRefresh(newTicker) {
		const newCoinData = this.state.coinData.map(function({ticker, name, price}) {
			let newPrice = price;
			if(newTicker === ticker) {
				const randomPercentage = 0.995 + Math.random() * 0.01;
				newPrice = newPrice * randomPercentage;
			}
			return {
				ticker,
				name,
				price: newPrice
			};
		});
		this.setState({coinData: newCoinData});

	}

	render() {
		
		return (
			<div className="App">
				<Header />
				<hr />
				<AccountBalance amount={this.state.balance} />
				<CoinList handleRefresh={this.handleRefresh}coinData={this.state.coinData} />
			</div>
		);
	}
}


export default App;
