import React from 'react';
import PropTypes from 'prop-types';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = (props) => {

  const sendingThisFunctionToExpenseFormComponent = (expenseDataFromExpenseForm) => {
    const newExpenseData = {
      ...expenseDataFromExpenseForm,
      id: Math.random().toString()
    };
    //console.log(newExpenseData);
    props.addData(newExpenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm sendData={sendingThisFunctionToExpenseFormComponent}/>
    </div>
  );
}



export default NewExpense;
