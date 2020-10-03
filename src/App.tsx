import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getWeatherTC} from './store/weatherReducer/weatherReducer'
import {AppRootStoreType} from './store/rootReducer'
import {GetWeatherRT} from './api/apiType'

const App = () => {

   const dispatch = useDispatch()
   const weather = useSelector<AppRootStoreType, GetWeatherRT[]>(state => state.weather.data)
   const count = useSelector<AppRootStoreType, number>(state => state.weather.count)
   const [city, setCity] = React.useState<string>('Могилев')

   const onclick = () => {
      dispatch(getWeatherTC(city))
   }

   return (
      <div className="App">
         <h1>weather-app</h1>
         <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
         <button onClick={onclick}>Search</button>
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

export default App
