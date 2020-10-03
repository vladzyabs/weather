import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './Button.module.scss'

type ButtonPropsType
   = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = (props: ButtonPropsType) => {
   return (
      <button className={classes.btn} {...props}/>
   )
}

export default React.memo(Button)
