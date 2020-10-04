import axios from 'axios'
import {ResponseType, GetWeatherPT, GetWeatherRT} from './apiType'

const instance = axios.create({
   baseURL: 'https://api.weatherbit.io/v2.0/',
   params: {
      'key': '9c2d66271b784d1bb417ee578465328a',
      'lang': 'ru',
      'units': 'C',
   },
})

export const API = {
   getWeather: ({city}: GetWeatherPT) =>
      instance.get<ResponseType<GetWeatherRT>>(`current?city=${city}`),
   getSubscriptionLimits: () =>
      instance.get(`subscription/usage`),
   getAlert: (lat: number, lon: number) =>
      instance.get(`alerts?lat=${lat}&lon=${lon}`) ,
}
