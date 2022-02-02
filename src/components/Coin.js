import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Td = styled.td`
	margin: 5px;
	padding: 5px;
	text-align: left;
`;
const TdButton = styled.td`
	text-align: center;
`;

const Coin = ({name, ticker, showBalance, balance, price, tickerId, handleRefresh}) => {

	const handleClick = (event) => {
		event.preventDefault();
		handleRefresh(tickerId);
	};

	
	return (
		<tr>
			<Td>{name}</Td>
			<Td>{ticker}</Td>
			<Td>{showBalance ? balance : '********'}</Td>
			<Td>${price.toFixed(4)}</Td>
			<TdButton>
				<form action="#" method="POST">
					<button onClick={handleClick}>Refresh</button>
				</form>
			</TdButton>
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