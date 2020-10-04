import React from 'react'
import classes from './Weather.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getWeatherTC} from '../../store/weatherReducer/weatherReducer'
import SearchForm from './SearchForm'
import Weather from './Weather'
import {AppRootStoreType} from '../../store/rootReducer'
import {GetWeatherRT} from '../../api/apiType'

const WeatherPage = () => {

   React.useEffect(() => {
      document.title = 'Weather'
   })

   const dispatch = useDispatch()
   const weather = useSelector<AppRootStoreType, GetWeatherRT[]>(state => state.weather.data)

   const toSearchWeather = (city: string) => {
      dispatch(getWeatherTC(city))
   }

   const styles = {
      container: {
         justifyContent: weather.length ? 'flex-start' : 'center',
      },
   }

   return (
      <div className={classes.container} style={styles.container}>
         <h1>Weather</h1>
         <SearchForm onSubmit={toSearchWeather}/>
         {
            weather.map((data, index) => <Weather key={index} data={data}/>)
         }
      </div>
   )
}

export default React.memo(WeatherPage)
