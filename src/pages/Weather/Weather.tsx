import React from 'react'
import classes from './Weather.module.scss'
import pathIconsSVG from '../../assets/icons-svg'
import {GetWeatherRT} from '../../api/apiType'
import WeatherMap from './WeatherMap'
import moment from 'moment'
import 'moment-timezone'

const mmHg = (mbar: number) => Math.floor(mbar * 0.750062)
const convertUTC = (time: string, tz: string) => {
   const offset = moment().tz(tz).utcOffset() * 60
   const hms = `${time}:00`.split(':')
   const ml = ((+hms[0]) * 60 * 60 + (+hms[1]) * 60 + (+hms[2])) * 1000
   const diffMl = ml + offset
   return moment(diffMl).format('LT')
}

const Weather = (props: { data: GetWeatherRT }) => {
   const {data} = props
   const localTime = moment().tz(data.timezone).format('LT')

   return (
      <div className={classes.weatherWrapper}>
         <div className={classes.weatherCity}>
            <h2>{data.city_name}</h2>
            <img src={pathIconsSVG[data.weather.icon]} alt="icon"/>
         </div>
         <div className={classes.weatherData}>
            <ul>
               <ListItem title={'Температура'} value={`${data.temp}`} dim={<span> &#8451;</span>}/>
               <ListItem title={'Давление'} value={`${mmHg(data.pres)}`} dim={<span> мм.рт.ст.</span>}/>
               <ListItem title={'Влажность воздуха'} value={`${Math.ceil(data.rh)}`} dim={<span> &#37;</span>}/>
               <ListItem title={'Осадки'} value={`${Math.ceil(data.precip)}`} dim={<span> мм.</span>}/>
               <ListItem title={'Скорость ветра'} value={`${Math.ceil(data.wind_spd)}`} dim={<span> м/с</span>}/>
               <ListItem title={'Направление ветра'} value={data.wind_cdir}/>
               <ListItem title={'Местное вермя'} value={localTime}/>
               <ListItem title={'Восход'} value={convertUTC(data.sunrise, data.timezone)}/>
               <ListItem title={'Закат'} value={convertUTC(data.sunset, data.timezone)}/>
            </ul>
            <WeatherMap lat={data.lat} lon={data.lon}/>
         </div>
      </div>
   )
}

const ListItem = (props: { title: string, value: string, dim?: any }) => {
   return <li>
      <h4 className={classes.dataTitle}>{props.title}</h4>
      <span className={classes.dataValue}>{props.value}{props.dim}</span>
   </li>
}

export default React.memo(Weather)
