import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Button = styled.button`
	text-align: center;
	margin: 0 1vw;
`;

const Coin = ({name, ticker, showBalance, balance, price, tickerId, handleRefresh, handleTransaction}) => {

	// const handleClick = (event) => {
	// 	event.preventDefault();
	// 	handleRefresh(tickerId);
	// };
	const handleBuy = (event) => {
		event.preventDefault();
		handleTransaction(true, tickerId);
	};
	const handleSell = (event) => {
		event.preventDefault();
		handleTransaction(false, tickerId);
	};

	
	return (
		<tr className="table-primary">
			<td>{name}</td>
			<td>{ticker}</td>
			<td>{showBalance ? balance : '********'}</td>
			<td>{price}</td>
			<td>
				<form action="#" method="POST">
					<Button className='btn btn-success' onClick={handleBuy}>Buy</Button>
					<Button className='btn btn-danger' onClick={handleSell}>Sell</Button>
				</form>
			</td>
			{/* <TdButton>
				<form action="#" method="POST">
					<button className='btn btn-secondary' onClick={handleClick}>Refresh</button>
				</form>
			</TdButton> */}
		</tr>
			
			
	);
	
}


Coin.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	balance: PropTypes.number.isRequired
};

export default Coin;