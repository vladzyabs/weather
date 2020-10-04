import React from 'react'
import logoPNG from '../../assets/images/cloudy.svg'
import classes from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import {ROUTES} from '../../routes'

const Header = () => {
   return (
      <header className={classes.header}>
         <div className={classes.container}>
            <div className={classes.logo}>
               <NavLink to={ROUTES.HOME}>
                  <img src={logoPNG} alt="logo"/>
               </NavLink>
            </div>
            <nav className={classes.navbar}>
               <NavLink to={ROUTES.HOME} activeClassName={classes.active}>Главная</NavLink>
               <NavLink to={ROUTES.ABOUT} activeClassName={classes.active}>О приложении</NavLink>
            </nav>
         </div>
      </header>
   )
}

export default React.memo(Header)
