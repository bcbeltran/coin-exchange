import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CoinList from "./components/CoinList";
import AccountBalance from "./components/AccountBalance";
//import { v4 as uuidv4 } from 'uuid';

const coinCount = 20;

const App = () => {

	const [balance, setBalance] = useState(10000);
	const [showBalance, setShowBalance] = useState(false);
	const [coinData, setCoinData] = useState([]);

	const componentDidMount = async () => {
		
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

		setCoinData(coinPriceData);
	};

	useEffect(function() {
		if(coinData.length === 0) {
			return componentDidMount(); 
		}
	});


	const handleRefresh = async (newTickerId) => {
		let tickerUrl = `https://api.coinpaprika.com/v1/tickers/${newTickerId}`;

		let response = await axios.get(tickerUrl);
		let newPrice = response.data.quotes.USD.price;
		const newCoinData = coinData.map(function (values) {
			let newValues = {...values};
			if (newTickerId === values.id) {
				newValues.price = newPrice;
			}
			return newValues;
		});

		setCoinData(newCoinData);
	};

	const handleHide = () => {
		setShowBalance(prev => !prev);
	};

	return (
		<div className="App">
			<Header />
			<hr />
			<AccountBalance
				amount={balance}
				showBalance={showBalance}
				handleHide={handleHide}
			/>
			<CoinList
				handleRefresh={handleRefresh}
				coinData={coinData}
				showBalance={showBalance}
			/>
		</div>
	);
}

export default App;
