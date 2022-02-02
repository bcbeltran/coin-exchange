import React, { Component } from "react";
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

export default class Coin extends Component {

	handleClick = (event) => {
		event.preventDefault();
		this.props.handleRefresh(this.props.tickerId);
	}

	render() {
		return (
			<tr>
				<Td>{this.props.name}</Td>
				<Td>{this.props.ticker}</Td>
				<Td>{this.props.showBalance ? this.props.balance : '********'}</Td>
				<Td>${this.props.price.toFixed(4)}</Td>
				<TdButton>
					<form action="#" method="POST">
						<button onClick={this.handleClick}>Refresh</button>
					</form>
				</TdButton>
			</tr>
		);
	}
}

Coin.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	balance: PropTypes.number.isRequired
};
