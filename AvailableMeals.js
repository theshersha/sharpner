import React from 'react';
import Card from '../Cart';
import MealsItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS =[
    {
        id:'m1',
        name:'Sushi',
        description:'Finest fish and veggies',
        price:30.00,
    },
    {
        id:'m2',
        name:'Sandwitch',
        description:'green veggies special',
        price:40.30,
    },
    {
        id:'m3',
        name:'Barbecue Burger',
        description:'Ameican,raw,meaty',
        price:50.00,
    },

    {
        id:'m4',
        name:'Manchav Soup',
        description:'Healthy...with all veggiges',
        price:40.30,
    },
];
const AvailableMeals = () =>{
 const mealsList = DUMMY_MEALS.map((meal) => ( 
 <MealsItem  
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />
 ));
    
 return (    
    <section className={classes.meals}> 
     <Card>
         <ul>
             {mealsList} 
         </ul>
     </Card>

    </section>
 )
};
export default AvailableMeals;