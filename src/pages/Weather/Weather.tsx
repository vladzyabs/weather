import React from 'react'
import classes from './Weather.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStoreType} from '../../store/rootReducer'
import {GetWeatherRT} from '../../api/apiType'
import {getWeatherTC} from '../../store/weatherReducer/weatherReducer'
import SearchForm from './SearchForm'

const Weather = () => {

   const dispatch = useDispatch()
   const weather = useSelector<AppRootStoreType, GetWeatherRT[]>(state => state.weather.data)
   const count = useSelector<AppRootStoreType, number>(state => state.weather.count)

   const toSearchWeather = (city: string) => {
      dispatch(getWeatherTC(city))
   }

   return (
      <div className={classes.container}>
         <h1>Weather</h1>
         <SearchForm onSubmit={toSearchWeather}/>
         {
            count > 0 &&
            <div>
                <span>Найдено: {count}</span>
                <div>
                    <ul>
                        <li>
                            <span>City:</span><span>{weather[0].city_name}</span>
                        </li>
                        <li>
                            <span>Temp:</span><span>{weather[0].temp}</span>
                        </li>
                        <li>
                            <span>Precipitation:</span><span>{weather[0].precip}mm</span>
                        </li>
                        <li>
                            <span>Wind speed:</span><span>{weather[0].wind_speed}m/s</span>
                        </li>
                    </ul>
                </div>
            </div>
         }
      </div>
   )
}

export default React.memo(Weather)
