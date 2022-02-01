import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CoinRow = styled.tr`
	margin: 5px;
	padding: 5px;
	text-align: center;
`;

export default class Coin extends Component {

	handleClick = (event) => {
		event.preventDefault();
		this.props.handleRefresh(this.props.ticker);
	}

	render() {
		return (
			<CoinRow>
				<td>{this.props.name}</td>
				<td>{this.props.ticker}</td>
				<td>{this.props.showBalance ? this.props.balance : '********'}</td>
				<td>${this.props.price.toFixed(2)}</td>
				<td>
					<form action="#" method="POST">
						<button onClick={this.handleClick}>Refresh</button>
					</form>
				</td>
			</CoinRow>
		);
	}
}

Coin.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	balance: PropTypes.number.isRequired
};
