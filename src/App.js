import React, {useState} from 'react';

// import ExpenseItem from "./components/ExpenseItem"; - Not using it anymore when having a new component expenses.js

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// function App() {
// we want to use the arrow function

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //Adding a new expense dinamically to the previous expenses array and where the new expense will be the first element in the array

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      {/* Instead of passing several attributes you can pass one attribute: */}
      {/* now you're passing the entire data point so the entire object in the array as a single prop       */}
      {/* if you pass only one attribute which is one prop then you should change the properties in the expenseitem component where instead of props.title write props.expense.title */}
      {/* <ExpenseItem
        expense = {expenses[2]}
      ></ExpenseItem>*/}

      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}

      {/* New Expenses.js component changes */}
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />

      {/* we could have directly forwared the expenses array into expenses component but it's not the task of the assignment so instead we are forwarding it through props and items props we are extracting it with that prop inside of the expenses component and that should render all the expenses*/}
    </div>
  );
};

export default App;
