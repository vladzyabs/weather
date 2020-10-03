import React from 'react'
import classes from './Weather.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getWeatherTC} from '../../store/weatherReducer/weatherReducer'
import SearchForm from './SearchForm'
import Weather from './Weather'
import {AppRootStoreType} from '../../store/rootReducer'
import {GetWeatherRT} from '../../api/apiType'

const WeatherPage = () => {

   const dddd: GetWeatherRT = {
      app_temp: 13.6,
      aqi: 46,
      city_name: 'Minsk',
      clouds: 98,
      country_code: 'BY',
      datetime: '2020-10-03:15',
      dewpt: 12.3,
      dhi: 0,
      dni: 0,
      elev_angle: -3.67,
      ghi: 0,
      hour_angle: 75,
      lat: 53.9,
      lon: 27.56667,
      ob_time: '2020-10-03 16:09',
      pod: 'n',
      precip: 2.36842,
      pres: 995.634,
      rh: 91.9281,
      slp: 1017.93,
      snow: 0,
      solar_rad: 0,
      state_code: '04',
      station: 'UMMS',
      sunrise: '04:15',
      sunset: '15:39',
      temp: 13.6,
      timezone: 'Europe/Minsk',
      ts: 1001040000,
      uv: 0,
      vis: 1.5,
      weather: {
         icon: 'r01n',
         code: 500,
         description: 'Небольшой дождь',
      },
      wind_cdir: 'ВЮВ',
      wind_cdir_full: 'Восточный-Юго-Восточный',
      wind_dir: 117,
      wind_spd: 3.82584,
   }

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
         <Weather data={dddd}/>
         {
            weather.map((data, index) => <Weather key={index} data={data}/>)
         }
      </div>
   )
}

export default React.memo(WeatherPage)
