
import React from 'react';
import Expenses from './components/Expense';
import NewExpense from './components/newExpenses/NewExpense';


function App() {
//console.log('expenses');
  const expenses = [
    {
      id:'e1',
      title:'News Paper',
      amount: 90.00,
      date:new Date(2020,7,14),
    },

    {id:'e2', title:'New Tv',amount: 77.00,date:new Date(2022,4,17)},
    
    {
      id:'e3',
      title:'Car Insurance',
      amount : 190.00,
      date:new Date(2020,3,25),
    },

    {
      id:'e4',
      title:'New Desktop',
      amount : 570.00,
      date:new Date(2021,2,5),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }
return (
  
    <div>
      <NewExpense onAddExpenseData = {addExpenseHandler}/>
      <Expenses items = {expenses} />
      
    </div>
  );
 }
 
export default App;
