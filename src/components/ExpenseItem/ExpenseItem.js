import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';


function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!');
  }
  
  return (
    <div className="maindiv">
      <div className="expenses">
        <div>{title}</div>
        <div>
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div>{props.price}</div>
        <button className="btn btn-secondary btn-sm px-3" onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;