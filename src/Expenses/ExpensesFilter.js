import React from "react";
import classes from "./ExpensesFilter.module.css";

export default function ExpensesFilter(props) {
  const filterChangeHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <div className={classes.expenses_filter}>
      <div className={classes.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
