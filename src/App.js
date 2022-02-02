import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CoinList from "./components/CoinList";
import AccountBalance from "./components/AccountBalance";
//import { v4 as uuidv4 } from 'uuid';

const coinCount = 20;

class App extends React.Component {
	state = {
		showBalance: false,
		balance: 10000,
		coinData: [
			// {
			// 	id: uuidv4(),
			// 	name: "Bitcoin",
			// 	ticker: "BTC",
			// 	price: 38000,
			// 	balance: 2,
			// },
			// {
			// 	id: uuidv4(),
			// 	name: "XRP",
			// 	ticker: "XRP",
			// 	price: 0.75,
			// 	balance: 100000,
			// },
			// {
			// 	id: uuidv4(),
			// 	name: "Cardano",
			// 	ticker: "ADA",
			// 	price: 1.6,
			// 	balance: 20000
			// },
			// {
			// 	id: uuidv4(),
			// 	name: "USDC",
			// 	ticker: "USDC",
			// 	price: 1.0,
			// 	balance: 8000000
			// },
		],
	};

	componentDidMount = async () => {
		
		let response = await axios.get("https://api.coinpaprika.com/v1/coins");

		let coinIds = response.data.slice(0, coinCount).map(coin => coin.id);

		let tickerUrl = "https://api.coinpaprika.com/v1/tickers/";
		let promises = coinIds.map(id => axios.get(tickerUrl + id));

		let coinData = await Promise.all(promises);
		let coinPriceData = coinData.map(function (response) {
			let coin = response.data;
			return {
				id: coin.id,
				name: coin.name,
				ticker: coin.symbol,
				balance: 0,
				price: coin.quotes.USD.price,
			};
		});

		this.setState({ coinData: coinPriceData });
	};

	handleRefresh = async (newTickerId) => {
		let tickerUrl = `https://api.coinpaprika.com/v1/tickers/${newTickerId}`;

		let response = await axios.get(tickerUrl);
		let newPrice = response.data.quotes.USD.price;
		const newCoinData = this.state.coinData.map(function (values) {
			let newValues = {...values};
			if (newTickerId === values.id) {
				newValues.price = newPrice;
			}
			return newValues;
		});

		this.setState({ coinData: newCoinData });
	};

	handleHide = () => {
		this.setState({ showBalance: !this.state.showBalance });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<hr />
				<AccountBalance
					amount={this.state.balance}
					showBalance={this.state.showBalance}
					handleHide={this.handleHide}
				/>
				<CoinList
					handleRefresh={this.handleRefresh}
					coinData={this.state.coinData}
					showBalance={this.state.showBalance}
				/>
			</div>
		);
	}
}

export default App;
