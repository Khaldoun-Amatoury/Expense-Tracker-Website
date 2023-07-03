import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <div className= {classes}>
      {/* the value of this special children prop will always be the content between the opening and closing tags of your custom component  */}
      {props.children}
    </div>
  );
};

export default Card;

/*
Note:
Now, why would we do that?

What did we gain by doing that?

Well, in this case, of course, not a whole lot

but we were able to extract some code duplication

from inside our CSS files

into this separate wrapper component.

And it's not just a duplicate CSS code.

We also were able to extract this HTML code,

this JSX code, this div here.

In this case, it's just one div

but throughout the course

you will also see more complex wrapper components

which might have a more complex JSX structure.

Things like modals and alerts.

And in such cases, being able to extract that

often allows you to save a lot of code duplication

and it often allows you to keep your other components clean.

And this is another aspect of composition.

We compose our ExpenseItem component

by using card as a wrapper,

by using some built-in HTML elements,

and by then all the putting in the ExpenseDate.

And all these components and elements are composed together

to form the overall ExpenseItem component

which then again, is used in other components

to in the end overall, build the overall user interface.

So composition is important.

You use it all the time when working with React.

Whenever you combine components, you are using composition.

And an especially important part of composition

is this props children feature

which allows you to also create wrapper components

which is a special type of component, you could say,

which you also sometimes need.
*/