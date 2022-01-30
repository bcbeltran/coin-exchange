import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Div = styled.div`
    margin: 1vw 10vw;
    padding: 3vw;
    background-color: rgb(22, 43, 22);
    color: whitesmoke;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const AccountBalance = ({amount}) => {
  return (
      <Div>
          Your current balance is: ${amount}
      </Div>
  );
};

export default AccountBalance;

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
};