import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    { title: 'Car Insurance', 'date': 'March 8,2013', price: '100k' },
    { title: 'Toiket paper', 'date': 'March 9,2013', price: '23k' },
    { title: 'Bike Insurance', 'date': 'March 10,2013', price: '456k' },
    { title: 'Health Checkup', 'date': 'March 11,2013', price: '87k' },
  ]
  return (
    <div className="maindiv">
    <NewExpense/>
      {/*{
        expenses.map(el => <Expenses data={el}></Expenses>)
      }*/}
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
