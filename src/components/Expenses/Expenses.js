import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  //it is redundant change it and use derived and computed state
  // const [filterInfoText, SetFilterInfoText] = useState('2019, 2020 & 2022');

  // let filterInfoText = "2019, 2020 & 2021";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // }else if (filteredYear === '2020'){
  //   filterInfoText = "2019, 2021 & 2022";
  // } else {
  //   filterInfoText = "2019, 2020 & 2022";
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        {/* here we changed props.expenses to props.items just that expenses is a word we used too much just to change a little */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
        {/* Outputing conditional content ways: */}
        {/* why is this below the best way to output conditional content? */}
        {/* because now we get a lean JSX snippet which we return and we've got our logic in the component function itself */}
        {/* {expensesContent} */}
        {/* In the first one, if you use the and operator JS will return after the and operator as a result of this check if the first condition is met  */}
        {/* so the second one was like this : filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : ( but we changed it to and operator where when the first condition is met then return after the and operator */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* it was like this without the abusing operator && */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
        <p>Data for years {filterInfoText} is hidden</p> */}
        {/* when using map we don't need this anymore as we're outputing the array of elements dinamically */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
