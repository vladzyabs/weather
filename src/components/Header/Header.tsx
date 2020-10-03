import React from 'react'
import classes from './Header.module.scss'
import {Preloader} from '../index'

const Header = () => {
   return (
      <header className={classes.header}>
         <Preloader/>
         header
      </header>
   )
}

export default React.memo(Header)
