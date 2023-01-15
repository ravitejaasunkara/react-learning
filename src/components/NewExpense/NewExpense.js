import React from 'react';
import PropTypes from 'prop-types';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = () => (
  <div className="new-expense">
    <ExpenseForm/>
  </div>
);


export default NewExpense;
