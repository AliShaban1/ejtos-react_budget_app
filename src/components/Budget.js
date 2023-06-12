import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
    const handleChange = (event) => {
    const value = parseInt(event.target.value)
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    if(value > 20000) {
        alert("The value cannot exceed £20000");
        return;
    }
    if(value < totalExpenses) {
        alert("You cannot reduce the budget value lower than spending £"+totalExpenses);
        return;
    }
    else {dispatch({
        type: "SET_BUDGET",
        payload: event.target.value
    });
    }
    
    };
        
    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget-input">Budget: {currency}</label>
            <input id="budget-input" type="number" value={budget} onChange={handleChange} step="10" max="20000"/>
        </div>
    );
};
export default Budget;
