import {combineReducers} from 'redux'
import appReducer from './appReducer/appReducer'
import weatherReducer from './weatherReducer/weatherReducer'

const rootReducer = combineReducers({
   app: appReducer,
   weather: weatherReducer,
})

export type AppRootStoreType = ReturnType<typeof rootReducer>

export default rootReducer
