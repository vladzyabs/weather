import React from 'react'
import classes from './Weather.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getWeatherTC} from '../../store/weatherReducer/weatherReducer'
import SearchForm from './SearchForm'
import Weather from './Weather'
import {AppRootStoreType} from '../../store/rootReducer'
import {GetWeatherRT} from '../../api/apiType'

const WeatherPage = () => {

   const dispatch = useDispatch()
   const weather = useSelector<AppRootStoreType, GetWeatherRT[]>(state => state.weather.data)

   const ddd: GetWeatherRT = {
      app_temp: 14.3,
      aqi: 42,
      city_name: "Minsk",
      clouds: 100,
      country_code: "BY",
      datetime: "2020-10-03:20",
      dewpt: 11.6,
      dhi: 0,
      dni: 0,
      elev_angle: -34.92,
      ghi: 0,
      hour_angle: -90,
      lat: 53.9,
      lon: 27.56667,
      ob_time: "2020-10-03 20:26",
      pod: "n",
      precip: 0,
      pres: 990.669,
      rh: 84.1688,
      slp: 1012.9,
      snow: 0,
      solar_rad: 0,
      state_code: "04",
      station: "EYVI",
      sunrise: "04:26",
      sunset: "15:46",
      temp: 14.3,
      timezone: "Europe/Minsk",
      ts: 1601756764,
      uv: 0,
      vis: 5,
      weather: {icon: "c04n", code: 804, description: "Облачно"},
      wind_cdir: "ЮВ",
      wind_cdir_full: "Юго-Восточный",
      wind_dir: 133,
      wind_spd: 5.79415,
   }

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
         {/*<Weather data={ddd}/>*/}
         {
            weather.map((data, index) => <Weather key={index} data={data}/>)
         }
      </div>
   )
}

export default React.memo(WeatherPage)
