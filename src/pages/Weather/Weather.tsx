import React from 'react'
import classes from './Weather.module.scss'
import pathIconsSVG from '../../assets/svg'
import {GetWeatherRT} from '../../api/apiType'

const mmHg = (mbar: number) => Math.floor((mbar * 0.750062) * 100) / 100
const date = (mm: number) => {
   const date = new Date(mm)
   const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
   const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
   return `${h}:${m}`
}

const Weather = (props: { data: GetWeatherRT }) => {
   const {data} = props
   return (
      <div className={classes.weatherWrapper}>
         <div className={classes.weatherCity}>
            <h2>{data.city_name}</h2>
            {/*<img src={pathIconsSVG[data.weather.icon]} alt="icon"/>*/}
            <img src={pathIconsSVG['r01n']} alt="icon"/>
         </div>
         <div className={classes.weatherData}>
            <ul>
               <ListItem title={'Температура'} value={`${data.temp}`} dim={<span> &#8451;</span>}/>
               <ListItem title={'Давление'} value={`${mmHg(data.pres)}`} dim={<span> мм.рт.ст.</span>}/>
               <ListItem title={'Влажность воздуха'} value={`${Math.ceil(data.rh)}`} dim={<span> &#37;</span>}/>
               <ListItem title={'Скорость ветра'} value={`${Math.ceil(data.wind_spd)}`} dim={<span> м/с</span>}/>
               <ListItem title={'Направление ветра'} value={data.wind_cdir}/>
               <ListItem title={'Местное вермя'} value={date(data.ts)}/>
               <ListItem title={'Восход'} value={data.sunrise}/>
               <ListItem title={'Закат'} value={data.sunset}/>
            </ul>
         </div>
      </div>
   )
}

const ListItem = (props: {title: string, value: string, dim?: any}) => {
   return <li>
      <h4 className={classes.dataTitle}>{props.title}</h4>
      <span className={classes.dataValue}>{props.value}{props.dim}</span>
   </li>
}

export default React.memo(Weather)
