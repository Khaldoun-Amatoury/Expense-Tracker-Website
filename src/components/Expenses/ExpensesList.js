import React from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css';
const ExpensesList = props => {
  // alternative way for : ? and &&
  //you can use jsx code to create a value which is stored in a variable.
  // let expensesContent = <p>No expenses found.</p>;

  // if (props.items.length > 0) {
  //   expensesContent = props.items.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  //another way of handling conditional content:


  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

/*

Note:
I will simply return a totally different JSX snippet

because that's yet another way

of handling conditional content.

If what your component returns changes entirely

based on different conditions, you can use this approach.

It would have not been appropriate here

in expenses JS before,

because only a part of the JSX snippet,

which we returned changed.

So there, the approach I showed

in the last lecture was better,

but if your entire JSX content changes,

when data is missing,

you can always add a if check where you return

a different JSX block if some condition is met.

And here, I simply want to return an h2 tag

with a class name of expenses-list__ fallback

with a text of found no expenses.

So that's what this component, expenses list, will render

if we got no expenses.

Hence, we can also get rid of that variable here.

And then with that,

we see there's found no expenses text

or the filtered list if we switch.

But now, with help of this extra component,

which uses a different logic for rendering

or for returning different JSX code,

and we now also got a little bit

of a leaner Expenses.js file again.
*/