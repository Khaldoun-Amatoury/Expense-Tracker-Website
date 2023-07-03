// you can delete the import react statement because JSX under the hood uses this react library
import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const   NewExpense = () => {
  return (
    <div className='new-expense'>
      {/* we removed the form html code because we need to split components and make a seperate expense form component to make the Newexpense.js lean */}
      {/* <form></form> */}
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
