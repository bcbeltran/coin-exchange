import "./App.css";
import Coin from "./components/Coin";
import AccountBalance from './components/AccountBalance';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img
					src="https://cryptologos.cc/logos/xrp-xrp-logo.png"
					className="App-logo"
					alt="logo"
				/>
				<h1 className="headingH1">Coin Exhcange</h1>
			</header>
      		<hr />
			<AccountBalance amount={10000} />
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
					<Coin name="Bitcoin" ticker="BTC" price={38000} />
					<Coin name="XRP" ticker="XRP" price={.72} />
					<Coin name="USDC" ticker="USDC" price={1} />
					<Coin name="Cardano" ticker="ADA" price={1.5} />
				</tbody>
			</table>
		</div>
	);
}

export default App;
