import React from 'react'
import logo from '../../logo.svg'
import classes from './Header.css';

const Header=()=>{
    return(
        <div className={classes.header}>
          <img className={classes.logo} src={logo}></img>
          <p>React Application</p>
          </div>
    )
}

export default Header;