import ExpenseItem from "../ExpenseItem/ExpenseItem";
function Expenses(props) {
  let expensesData = props.items.map(
    (item) => {
      return <ExpenseItem
        title={item.title}
        date={item.date}
        price={item.price}>
        key={item.id}
      </ExpenseItem>
    })
  return (
    <div>
      {
        expensesData
      }
    </div>
  );
}

export default Expenses;