import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
   return (
      <header className={classes.header}>
         <div className={classes.container}>
            header
         </div>
      </header>
   )
}

export default React.memo(Header)
