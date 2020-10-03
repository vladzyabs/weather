import {GetWeatherRT} from '../../api/apiType'
import {Dispatch} from 'redux'
import {API} from '../../api/api'

const SET_WEATHER = 'WEATHER/SET_WEATHER'

const initialState = {
   count: 0 as number,
   data: [] as GetWeatherRT[],
}
type InitialStateType = typeof initialState

const weatherReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'WEATHER/SET_WEATHER':
         return {
            ...state,
            data: [...action.payload],
            count: action.payload.length,
         }
      default:
         return state
   }
}

export default weatherReducer

// actions
const setWeather = (data: GetWeatherRT[]) => ({
   type: SET_WEATHER,
   payload: data,
})
type SetWeatherActionType = ReturnType<typeof setWeather>

type ActionType
   = SetWeatherActionType

// thunks
export const getWeatherTC = (city: string) =>
   async (dispatch: Dispatch) => {
      const response = await API.getWeather({city})
      try {
         dispatch(setWeather(response.data.data))
      } catch (e) {
         console.log(e)
      }
   }
