import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props){
  return (
    <div>
    <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].price}></ExpenseItem>
    <ExpenseItem title={props.items[1].title} date={props.items[1].date} price={props.items[1].price}></ExpenseItem>
    <ExpenseItem title={props.items[2].title} date={props.items[2].date} price={props.items[2].price}></ExpenseItem>
    <ExpenseItem title={props.items[3].title} date={props.items[3].date} price={props.items[3].price}></ExpenseItem>
    </div>
  );
}

export default Expenses;