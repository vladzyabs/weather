import React from 'react'
import classes from './Preloader.module.scss'

const Preloader = () => {
   return (
      <div id={classes.wrapper}>
         <div className={classes.loadingProgress}></div>
      </div>
   )
}

export default React.memo(Preloader)
