import React from 'react'
import classes from './NotFound.module.scss'
import {NavLink} from 'react-router-dom'
import {ROUTES} from '../../routes'

const NotFound = () => {
   return (
      <div className={classes.container}>
         <h1>404 - Not Found!</h1>
         <NavLink to={ROUTES.HOME}>
            Go Home
         </NavLink>
      </div>
   )
}

export default React.memo(NotFound)
