import "./Expense.css";
import React,{useState} from "react";

import Card from "./card";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from "./ExpenseList";
import ExpenseItem from "./ExpensesItem";

const Expenses = (props) => {
const[filteredYear,setFiltered]=useState('2020');

const filterChangeHandeler =selectedYear => {
  setFiltered(selectedYear);
};

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});

   return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
        selected ={filteredYear}
        onChangeFilter = {filterChangeHandeler}
        />
        <ExpensesList 
        list = {filteredExpenses}/>
     
        {props.items.map((expense)=>(
          
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        ))}
        </Card>
      </div>
    
  );
}
export default Expenses;


