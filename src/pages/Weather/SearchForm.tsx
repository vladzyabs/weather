import React, {KeyboardEvent} from 'react'
import classes from './Weather.module.scss'
import {Button, ErrorMessage, Input} from '../../components'
import {useFormik} from 'formik'

type SearchFormPropsType = {
   onSubmit: (city: string) => void
}

const SearchForm = (props: SearchFormPropsType) => {

   const formik = useFormik({
      initialValues: {
         city: '',
      },
      validate: values => {
         const errors: any = {}
         if (!values.city) {
            errors.city = 'Введите город'
         } else if (/^[0-9/|.?!`~@#$%^&*()-_=+:;]+$/i.test(values.city)) {
            errors.city = 'Не используйте цифры и спец.символы'
         }
         return errors
      },
      onSubmit: values => {
         props.onSubmit(values.city)
      },
   })

   const styles = {
      input: {borderRadius: '20px 0 0 20px', borderRight: 'none'},
      button: {borderRadius: '0 20px 20px 0'},
   }

   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
         formik.handleSubmit()
      }
   }

   return (
      <div className={classes.weatherForm}>
         {formik.errors.city && <ErrorMessage error={formik.errors.city}/>}
         <form onSubmit={formik.handleSubmit}>
            <Input style={styles.input}
                   onKeyPress={onKeyPressHandler}
                   error={formik.touched.city ? formik.errors.city : ''}
                   {...formik.getFieldProps('city')}/>
            <Button type="submit"
                    style={styles.button}>Search</Button>
         </form>
      </div>
   )
}

export default React.memo(SearchForm)
