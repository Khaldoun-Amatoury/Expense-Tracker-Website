import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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

  const filteredExpenses = props.items.filter(expense => {
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
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* <p>Data for years {filterInfoText} is hidden</p> */}
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
