import React, { useState } from "react";
import ExpenseItem from "../ExpensesItem";
import ExpenseForm from "./ExpenseForm";
import  "./NewExpense.css";

    const NewExpense = (props) => {
      const [isEditing,setIsEditing] = useState(false);
      const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
   const startEditingHandler = () =>{
     setIsEditing(true);
   };

   const stopEditingHandler =() =>{
     setIsEditing(false);
   };

  return (
    <div className ="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle = {stopEditingHandler}></ExpenseForm>}
      
      {/* <ExpenseItem
       title={props.items[0].title}
       amount={props.items[0].amouny}
       date={props.items[0].date}
       />

      <ExpenseItem                             
       title={props.items[1].title}
       amount={props.items[1].amouny}
       date={props.items[1].date}
       />
       
       <ExpenseItem
       title={props.items[2].title}
       amount={props.items[2].amouny}
       date={props.items[2].date}
       />

       <ExpenseItem
       title={props.items[3].title}
       amount={props.items[3].amouny}
       date={props.items[3].date}
     /> */
      }   
  </div>
  );
};
 export default NewExpense;



