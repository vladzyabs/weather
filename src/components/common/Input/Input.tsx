import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './Input.module.scss'

type InputPropsType
   = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
   & { error?: string }

const Input = (props: InputPropsType) => {
   const {error, ...restProps} = props
   return (
      <label className={classes.label}>
         <input type="text" {...restProps} className={classes.customInput}/>
      </label>
   )
}

export default React.memo(Input)
