import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm() {
    return (
        <form className={classes.form}>
            <Input label='Amount' input={{id:"amount", type:"number", min:'1', max:'1', step:'1', defaultValue:'1'}} />
            <button className={classes.button}> +Add </button>
        </form>
    )
}