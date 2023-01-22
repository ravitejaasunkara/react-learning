import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const INITIAL_EXPENSE = [
  { title: 'Car Insurance', 'date': 'March 8,2013', price: '100k','id':'1' },
  { title: 'Toiket paper', 'date': 'March 9,2013', price: '23k' ,'id':'2' },
  { title: 'Bike Insurance', 'date': 'March 10,2013', price: '456k' ,'id':'3' },
  { title: 'Health Checkup', 'date': 'March 11,2013', price: '87k' ,'id':'4'},
];
function App() {
  
  const [expenses,addExpense] = useState(INITIAL_EXPENSE);
  const addNewExpense = (expense) => {
    addExpense(prevData => {
      return [expense,...prevData];
    });
  }
  return (
    <div className="maindiv">
    <NewExpense addData={addNewExpense}/>
      {/*{
        expenses.map(el => <Expenses data={el}></Expenses>)
      }*/}
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
