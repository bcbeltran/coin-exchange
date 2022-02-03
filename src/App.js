import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CoinList from "./components/CoinList";
import AccountBalance from "./components/AccountBalance";
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';
//import { v4 as uuidv4 } from 'uuid';

const coinCount = 20;

const App = () => {

	const [balance, setBalance] = useState(10000);
	const [showBalance, setShowBalance] = useState(false);
	const [coinData, setCoinData] = useState([
		{
			id: "BTC",
			tickerId: "BTC",
			name: "Bitcoin",
			ticker: "BTC",
			balance: 0,
			price: 38000,
		},
		{
			id: "XRP",
			tickerId: "XRP",
			name: "XRP",
			ticker: "XRP",
			balance: 0,
			price: 5.89,
		},
		{
			id: "ADA",
			tickerId: "ADA",
			name: "Cardano",
			ticker: "ADA",
			balance: 0,
			price: 4.22,
		},
		{
			id: "VET",
			tickerId: "VET",
			name: "VeChain",
			ticker: "VET",
			balance: 0,
			price: 3.33,
		},
	]);

	// const componentDidMount = async () => {
		
	// 	let response = await axios.get("https://api.coinpaprika.com/v1/coins");

	// 	let coinIds = response.data.slice(0, coinCount).map(coin => coin.id);

	// 	let tickerUrl = "https://api.coinpaprika.com/v1/tickers/";
	// 	let promises = coinIds.map(id => axios.get(tickerUrl + id));

	// 	let coinData = await Promise.all(promises);
	// 	let coinPriceData = coinData.map(function (response) {
	// 		let coin = response.data;
	// 		return {
	// 			id: coin.id,
	// 			name: coin.name,
	// 			ticker: coin.symbol,
	// 			balance: 0,
	// 			price: coin.quotes.USD.price,
	// 		};
	// 	});

	// 	setCoinData(coinPriceData);
	// };

	// useEffect(function() {
	// 	if(coinData.length === 0) {
	// 		return componentDidMount(); 
	// 	}
	// });


	// const handleRefresh = async (newTickerId) => {
	// 	let tickerUrl = `https://api.coinpaprika.com/v1/tickers/${newTickerId}`;

	// 	let response = await axios.get(tickerUrl);
	// 	let newPrice = response.data.quotes.USD.price;
	// 	const newCoinData = coinData.map(function (values) {
	// 		let newValues = {...values};
	// 		if (newTickerId === values.id) {
	// 			newValues.price = newPrice;
	// 		}
	// 		return newValues;
	// 	});

	// 	setCoinData(newCoinData);
	// };

	const handleHide = () => {
		setShowBalance(prev => !prev);
	};

	const getStimmy = () => {
		setBalance(prev => prev + 2000);
	};

	const handleTransaction = (isBuy, ticker) => {
		console.log('this is the balance, ', balance);
		var balanceChange = isBuy ? 1 : -1;
		const newCoinData = coinData.map(function(values) {
			let newValues = {...values};
			console.log('these are the values, ', newValues);

			if (
				ticker === values.ticker &&
				isBuy &&
				newValues.price < balance
			) {
				newValues.balance += balanceChange;
				setBalance((prev) => prev - balanceChange * newValues.price);
			} else if (
				ticker === values.ticker &&
				!isBuy &&
				newValues.balance !== 0
			) {
				newValues.balance += balanceChange;
				setBalance((prev) => prev + newValues.price);
			} 
			
			return newValues;
		});
		setCoinData(newCoinData);
	};

	setTimeout(function(){
		const randomPercent = Math.floor(Math.random() * 10000);
		if((randomPercent % 2) === 0){
			setCoinData(prev => prev.map(coin => ({
				...coin,
				price: coin.price + coin.price * 0.0001
			}))); 
			
		} else {
			setCoinData(prev => prev.map(coin => ({
				...coin,
				price: coin.price - coin.price * 0.0001
			}))); 

		}

	}, 5000);

	return (
		<div className="App">
			<Header />
			<AccountBalance
				amount={balance}
				showBalance={showBalance}
				handleHide={handleHide}
				getStimmy={getStimmy}
			/>
			<CoinList
				//handleRefresh={handleRefresh}
				handleTransaction={handleTransaction}
				coinData={coinData}
				showBalance={showBalance}
			/>
		</div>
	);
}

export default App;
