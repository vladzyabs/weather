import React, {KeyboardEvent} from 'react'
import {Button, Input} from '../../components'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
   city: Yup.string()
      .required('Введите город...'),
})

type SearchFormPropsType = {
   onSubmit: (city: string) => void
}

const SearchForm = (props: SearchFormPropsType) => {

   const formik = useFormik({
      initialValues: {
         city: '',
      },
      validationSchema,
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
      <form onSubmit={formik.handleSubmit}>
         <Input style={styles.input}
                onKeyPress={onKeyPressHandler}
                error={formik.touched.city ? formik.errors.city : ''}
                {...formik.getFieldProps('city')}/>
         <Button type="submit"
                 style={styles.button}>Search</Button>
      </form>
   )
}

export default React.memo(SearchForm)
