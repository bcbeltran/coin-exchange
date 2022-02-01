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
			showBalance: false,
			balance: 10000,
			coinData: [
				{
					id: uuidv4(),
					name: "Bitcoin",
					ticker: "BTC",
					price: 38000,
					balance: 2,
				},
				{
					id: uuidv4(),
					name: "XRP",
					ticker: "XRP",
					price: 0.75,
					balance: 100000,
				},
				{
					id: uuidv4(),
					name: "Cardano",
					ticker: "ADA",
					price: 1.6,
					balance: 20000
				},
				{
					id: uuidv4(),
					name: "USDC",
					ticker: "USDC",
					price: 1.0,
					balance: 8000000
				},
			],
		};
		this.handleRefresh = this.handleRefresh.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}
	
	handleRefresh(newTicker) {
		const newCoinData = this.state.coinData.map(function({ticker, name, price, balance}) {
			let newPrice = price;
			if(newTicker === ticker) {
				const randomPercentage = 0.995 + Math.random() * 0.01;
				newPrice = newPrice * randomPercentage;
			}
			return {
				ticker,
				name,
				balance,
				price: newPrice
			};
		});
		this.setState(prevState => {
			return (
				{
					...prevState,
					coinData: newCoinData
				}
			);
		});

	}

	handleHide() {
		this.setState({showBalance: !this.state.showBalance});
	}

	render() {
		
		return (
			<div className="App">
				<Header />
				<hr />
				<AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleHide={this.handleHide} />
				<CoinList handleRefresh={this.handleRefresh}coinData={this.state.coinData} showBalance={this.state.showBalance} />
			</div>
		);
	}
}


export default App;
