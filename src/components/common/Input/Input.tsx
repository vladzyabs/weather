import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './Input.module.scss'

type InputPropsType
   = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
   & { error?: string }

const Input = (props: InputPropsType) => {
   return (
      <label className={classes.label}>
         <input type="text"
                {...props}
                placeholder={props.error ? props.error : props.placeholder}
                className={classes.customInput}
         />
      </label>
   )
}

export default React.memo(Input)
