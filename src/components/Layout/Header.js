// import React,{useState} from 'react'
import mealsImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


export default function Header(props) {

  return (
    <>
      <header className={classes.header}>
        <h1>Laziz Food</h1>
        <HeaderCartButton openCart={props.changeStatus}> Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  )
}
