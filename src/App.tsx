import React from 'react'
import classes from './styles/App.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getWeatherTC} from './store/weatherReducer/weatherReducer'
import {AppRootStoreType} from './store/rootReducer'
import {GetWeatherRT} from './api/apiType'
import {Button, Header, Input, Preloader} from './components'

const App = () => {

   const dispatch = useDispatch()
   const weather = useSelector<AppRootStoreType, GetWeatherRT[]>(state => state.weather.data)
   const count = useSelector<AppRootStoreType, number>(state => state.weather.count)
   const [city, setCity] = React.useState<string>('Могилев')

   const onclick = () => {
      dispatch(getWeatherTC(city))
   }

   return (
      <div className={classes.App}>
         <Preloader/>
         <Header/>
         <div className={classes.content}>
            <h1>weather-app</h1>
            <Input type="text"
                   value={city}
                   onChange={e => setCity(e.target.value)}
                   style={{borderRadius: '20px 0 0 20px', borderRight: 'none'}}/>
            <Button onClick={onclick}
                    style={{borderRadius: '0 20px 20px 0'}}>Search</Button>
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
      </div>
   )
}

export default App
