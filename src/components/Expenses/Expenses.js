import ExpenseItem from "../ExpenseItem/ExpenseItem";
function Expenses(props){
  return (
    <div>
    {
      props.items.map((item) => {
        return <ExpenseItem title={item.title} date={item.date} price={item.price}></ExpenseItem>
      })
    }
    </div>
  );
}

export default Expenses;