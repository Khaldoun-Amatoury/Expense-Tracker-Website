import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;

/*
Note:

we have multiple custom components

and they are nested inside of each other.

Just to make this really clear again,

in the App component, we're using the ExpenseItem component

and inside of the ExpenseItem component,

we're using the ExpenseDate component.

And not just that, we're also forwarding our data

with the help of props through multiple components.

We're passing data from the App component into ExpenseItem

and in ExpenseItem, were outputting some of the data.

But other parts of the data to be precise, the date,

which we here, also already received through props,

it's then forwarded even further

into the ExpenseDate component, again, by using props.

Because props are our way of passing data

from component A to B.

And it's also totally fine to have a component

which just passes data on.

So in the end you could say,

we pass data from App to ExpenseDate,

the date, to be precise, is passed on.

And we passed it on through ExpenseItem,

because that's how props work.

We pass data from a component to a direct child component.

So to a component which is used

in that other components JSX code

and we can't skip such a component.

So if the date should be passed to ExpenseDate in the end.

Here, in this case, since we use ExpenseDate

inside of ExpenseItem,

we first of all have to pass that data to ExpenseItem

and then forward it to ExpenseDate.
*/
