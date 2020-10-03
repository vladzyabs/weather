import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
   return (
      <header className={classes.header}>
         header
      </header>
   )
}

export default React.memo(Header)
