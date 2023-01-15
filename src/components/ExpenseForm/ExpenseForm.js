import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle,grabTitle] = useState('');
  const titleHandler = (event) => { grabTitle(event.target.value)};

  const [enteredAmount,grabAmount] = useState('');
  const amountHandler = (event) => { grabAmount(event.target.value); };

  const [enteredDate,grabDate] = useState('');
  const dateHandler = (event) => { grabDate(event.target.value); };

  const formHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate).toUTCString(),
    };
    console.log(formData);
  }
  return (
    <div>
      <form className='formdiv'>
        <div className='new-expense__controls form-control'>
          <input type="text" onChange={titleHandler}/>
        </div>
        <div className="new-expense__controls form-control">
          <input type="text" onChange={amountHandler}/>
        </div>
        <div className="new-expense__controls form-control">
          <input type="date" onChange={dateHandler}/>
        </div>
        <div className="new-expense__actions">
          <button onClick={formHandler }>Add Expense</button>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
