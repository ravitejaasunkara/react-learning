import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const clickHandler = (event) => { console.log(event.target.value)}
  return (
    <div>
      <form className='formdiv'>
        <div className='new-expense__controls form-control'>
          <input type="text" onChange={clickHandler}/>
        </div>
        <div className="new-expense__controls form-control">
          <input type="text" />
        </div>
        <div className="new-expense__controls form-control">
          <input type="date" />
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
