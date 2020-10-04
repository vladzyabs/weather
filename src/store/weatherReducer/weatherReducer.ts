import {GetWeatherRT} from '../../api/apiType'
import {Dispatch} from 'redux'
import {API} from '../../api/api'
import {appSetError, AppSetErrorActionType, appSetStatus, AppSetStatusActionType} from '../appReducer/appReducer'

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
   async (dispatch: DispatchType) => {
      dispatch(appSetStatus('loading'))
      try {
         const response = await API.getWeather({city})
         if (response.status === 200) {
            dispatch(setWeather(response.data.data))
            dispatch(appSetStatus('success'))
         } else if (response.status === 204) {
            dispatch(appSetError('Проверьте введенный вами город!'))
            dispatch(appSetStatus('failed'))
         } else {
            dispatch(appSetError('Oops, something went wrong, please try again'))
            dispatch(appSetStatus('failed'))
         }
      } catch (error) {
         dispatch(appSetError(error.message))
         dispatch(appSetStatus('failed'))
      }
   }

type DispatchType
   = Dispatch<ActionType | AppSetStatusActionType | AppSetErrorActionType>