import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Div = styled.div`
    margin: 2vw 10vw;
    padding: 3vw;
    background-color: rgb(22, 43, 22);
    color: whitesmoke;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 3vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Button = styled.button`
    border-style: none;
    padding: 1vw;
    margin: 0 1vw;
    color: white;
    background-color: rgb(22, 2, 22);
    border-radius: 5px;
`;

const P = styled.p`
    margin: 1vw;
    font-size: 10px;
    color: red;
`;

const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const AccountBalance = ({handleHide, amount, showBalance, getStimmy}) => {
    const buttonText = showBalance ? "Hide Balance" : "Show Balance";
    const buttonClass = 'btn ' + (showBalance ? 'btn-light' : 'btn-primary');
    return (
		<>
			<Div>
				<p>
					Your current balance is:{" "}
					{showBalance ? `${formatter.format(amount)}` : "$********"}
				</p>
				<Button onClick={handleHide} className={buttonClass}>
					{buttonText}
				</Button>
				<Button onClick={getStimmy} className="btn btn-success">
					<i className="fas fa-helicopter"></i> Get your stimmy check!{" "}
					<i className="fas fa-helicopter"></i>
				</Button>
                <P>(If you run out of money get a stimmy!)</P>
			</Div>
		</>
	);
};

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
};

export default AccountBalance;