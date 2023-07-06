import React, { useState } from "react";

import "./ExpenseForm.css";

// Note: it's up to you what you prefer either the three sliced states or one state

const ExpenseForm = (props) => {
  // three sliced states independent of each other
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //one state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // three state handlers independent of each other

    setEnteredTitle(event.target.value);

    //one state appraoch

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // instead of the above one
    // setUserInput ((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // });

    //in many cases both will work fine but keep in mind that react schedule state updates it doesn't perform them instantly so if you schedule a lot of state updates at the same time you could be depending on an outdated or incorrect state snapshot if you use the first approach but if you use the second appraoch React will guarantee that the state snapshot it will give you in the inner function it wil be the latest state snapshot keeping all schedule state updates in mind so if your state updates depends on the previous state use the second approach function form
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   //spread operator
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   //spread operator
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };

  //An alternative where you put all identifier here in this change handler function with the value of each and you call an arrow function in the onChange input
  //That's the onChange prop in this situation :
  // onChange={(event) =>
  //             inputChangeHandler("title", event.target.value)
  //           }

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else if (identifier === "amount") {
  //     setEnteredAmount(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault(); //this will make the button not send request to the development server and the page will not reload anymore

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //comunicating up to the parent component which is newexpenses.js where we can call a function in the new expense component and we can pass data as a parameter
    //so here when we call on save expense data in the expense form, I can pass the expense data which I generate here as an argument and that's the value which we'll receive as a parameter here in new expenses which is enteredExpenseData in newexpense
    //The trick really is that we pass around a pointer at a function  <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text"
          value = {enteredTitle}
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
