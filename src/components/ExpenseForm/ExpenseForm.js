import React, { useState } from 'react';
import './ExpenseForm.css';
import NewExpense from '../NewExpense/NewExpense';
const ExpenseForm = (props) => {
  const [count,setCount] = useState(0);
  const countHandler = (event) => {
    event.preventDefault();
    setCount(count+1);
  }
  const [enteredTitle, grabTitle] = useState('');
  const titleHandler = (event) => {
    grabTitle(event.target.value)
  };

  const [enteredAmount, grabAmount] = useState('');
  const amountHandler = (event) => {
    grabAmount(event.target.value);
  };

  const [enteredDate, grabDate] = useState('');
  const dateHandler = (event) => { 
    grabDate(event.target.value); 
  };

  const formHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate).toUTCString(),
    };
    props.sendData(formData);
    //console.log(formData);
    grabTitle('');
    grabAmount('');
    grabDate('');
    setCount(0);
  }
  return (
    <div>
      <form className='formdiv'>
        <div className='new-expense__controls'>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle} id='title' className='form-control'/>
        </div>
        <div className="new-expense__controls" id='amount'>
          <label htmlFor="amount">Amount</label>
          <input type="text" onChange={amountHandler} value={enteredAmount} className='form-control'/>
        </div>
        <div className="new-expense__controls">
          <label htmlFor="date">Date</label>
          <input type="date" onChange={dateHandler} value={enteredDate} id='date' className='form-control'/>
        </div>
        <div className="new-expense__actions">
          <button onClick={formHandler}>Add Expense</button>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
