import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Div = styled.div`
    margin: 2vw 10vw 0;
    padding: 3vw;
    background-color: rgb(22, 43, 22);
    color: whitesmoke;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 1.8rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Button = styled.button`
    padding: 1vw;
    margin: 0 2vw;
    color: white;
    background-color: rgb(22, 2, 22);
    border-radius: 5px;
`;

const AccountBalance = ({handleHide, amount, showBalance}) => {
    const buttonText = showBalance ? "Hide balance" : "Show balance";
    return (
        <>
        <Div>
            <p>Your current balance is: {showBalance ? `$${amount}` : "$********"}</p>
            <Button onClick={handleHide}>{buttonText}</Button>
        </Div>

        </>
    );
};

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
};

export default AccountBalance;