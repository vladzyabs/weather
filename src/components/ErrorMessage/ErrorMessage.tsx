import React from 'react'
import classes from './ErrorMessage.module.scss'
import {useDispatch} from 'react-redux'
import {appSetError} from '../../store/appReducer/appReducer'

type ErrorMessagePropsType = {
   error: string | null
}

const ErrorMessage = (props: ErrorMessagePropsType) => {

   const dispatch = useDispatch()
   const [showError, setShowError] = React.useState<boolean>(false)

   React.useEffect(() => {
      if (props.error) {
         setShowError(true)
         setTimeout(() => {
            setShowError(false)
            dispatch(appSetError(null))
         }, 5000)
      }
   }, [dispatch, props.error])

   return (
      <div className={`${classes.errorMessage} ${showError ? classes.active : ''} `}>
         {props.error}
      </div>
   )
}

export default React.memo(ErrorMessage)
