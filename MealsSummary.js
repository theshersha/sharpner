import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () =>{
 return(
<section className = {classes.summary}>
    <h2> Delicious Food, Delivered To You </h2>
    <p>
        Choose you are favorite meals from our board selection of available meals
        all you are favorite mels are delivered to as quick as possible and enjoy 
        a delicious lunch or deaner at home.
    </p>

    <p>
        All our meals are cooked  with high-quality ingrediens,our all chefs are experienced well trained.
        and hygiene is our first priority.
    </p>
</section>
 );
};

export default MealsSummary;