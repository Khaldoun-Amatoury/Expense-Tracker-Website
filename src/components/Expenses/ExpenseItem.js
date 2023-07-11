import React from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

/*function ExpenseItem({date, title, amount}) {}
this is called object destructuring syntax where you add opening
and closing curly braces and then you refer to the different properties
of the object you are receiving here, so of the props object 
to pull these values by those keys here out of that icncoming object and
stpre them in locally available variables of these names here
and then in the return section you can put instead of 
{props.title} then directly {title} and etc.
*/

//this component is a state less component
const ExpenseItem = (props) => {
  //adding some JS code
  //we used props so no usage for these anymore
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  //using JS code inside HTML instead of hard code
  //between those curly brackets, you can run basic JS expressions
  // const month = props.date.toLocaleString('en-US', {month: 'long'});
  // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  // const year = props.date.getFullYear();
  //we cut month, year and day because we made a new component just for rendering date for expense item
  
  //function clickHandler() {}
  // Usestate hook always return an array with two elements the current state value and the function which updates that
  
  // const [title, setTitle] = useState(props.title); //one of the important React Hook

  // let title = props.title;

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   // title = "Updated!";
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        {/* we'll be returning the date div in expense date component */}
        {/* <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div> */}
        {/* <div>{props.date.toISOString()}</div> */}
        {/* instead we output this expense date component */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* Onclick which is an event handler prop wants a function as a value a function passed as a value for onclick and all these on props which then is executed when that event occurs */}
        {/* <button onClick={clickHandler}>Change Title</button> */}

      </Card>
    </li>
  );
};

// Note: if there's no content between opening and closing tag then you don't need a closing tag so just put />

export default ExpenseItem;

/*
Note:

<button onClick={clickHandler}>Change Title</button>

You don't add parentheses here.

Instead, you just repeat the name of the function.

No matter if you created that function like this

or with the function keyword, this does not matter.

No matter how you defined it,

you just point at it like this.

you just point at it like this.

Why?

Because if you would add parentheses here,

JavaScript would execute this

when this line of code is being parsed.

And this line of code is being parsed

when the JSX code is returned.

when the JSX code is returned.

So it's then not executing clickHandler

when the click occurs but when this JSX code is evaluated,

and that would be too early.

That's why instead we just point at the clickHandler.

We just point at the function.

We pass a pointer at this function as a value to onClick,

We pass a pointer at this function as a value to onClick,

and then React basically memorizes this

and executes the function for us whenever the click occurs

so that it's not executed when this is evaluated

but when the click occurs, which is exactly what we want.
*/

// Note: dumb is state less components and smart is state full components