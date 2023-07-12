import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpensesList.module.css";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className={classes.expenses_list__fallback}>Found no expense!</h2>
    );
  }

  return (
    <ul className={classes.expenses_list}>
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
}
