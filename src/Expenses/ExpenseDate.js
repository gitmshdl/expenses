import React from "react";
import classes from "./ExpenseDate.module.css";

export default function (props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date_month}>{month}</div>
      <div className={classes.expense_date_year}>{year}</div>
      <div className={classes.expense_date_day}>{day}</div>
    </div>
  );
}
