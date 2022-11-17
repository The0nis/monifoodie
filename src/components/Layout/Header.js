import React, { Fragment } from 'react'
import meal from '../../assets/meals.jpg';
import style from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className={style.header}>
            <h1>moniMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>

        <div className={style['main-image']}>
            <img src={meal} alt="A table full of delicious food"/>
        </div>

    </Fragment>
  )
}

export default Header