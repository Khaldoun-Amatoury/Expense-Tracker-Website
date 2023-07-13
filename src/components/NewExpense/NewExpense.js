// you can delete the import react statement because JSX under the hood uses this react library
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  
  return (
    <div className="new-expense">
      {/* we removed the form html code because we need to split components and make a seperate expense form component to make the Newexpense.js lean */}
      {/* <form></form> */}
      {/* The & trick is that if the condition before & is true then execute the after the & */}
      {/* instead of the & trick, you can also work with a variable with a default value and an if check or with a ternary expression ?:   */}
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
