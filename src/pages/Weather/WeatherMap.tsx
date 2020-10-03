import React from 'react'
import classes from './Weather.module.scss'
import {YMaps, Map, Placemark} from 'react-yandex-maps'

type MapPropsType = {
   lat: number
   lon: number
}

const WeatherMap = (props: MapPropsType) => {

   const {lat, lon} = props

   return (
      <div className={classes.mapWrapper}>
         <YMaps>
            <div>
               <Map state={{ center: [lat, lon], zoom: 9 }} width={'100%'}>
                  <Placemark geometry={[lat, lon]} />
               </Map>
            </div>
         </YMaps>
      </div>
   )
}

export default React.memo(WeatherMap)
