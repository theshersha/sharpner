
import React from "react";
import { useState } from "react";
import "./CourseInput.css";


const CourseInput = props =>{
    const [enteredValue,setEnteredValue] = useState('');
    const [isValid,setIsValid] = useState(true);

    const goalInputChangeHandler = event =>{
        if(event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event =>{
        event.preventDefault();

        if(enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };
    return (
        <form onSubmit = {formSubmitHandler}>
            <div className="form-control">
                <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
                <input style={{borderColor : !isValid ? 'red' : 'black' ,backgroundColor : !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler}/>  
            </div>
            <button type="submit" >Add Goal</button>
        </form>
    );
};
export default CourseInput;