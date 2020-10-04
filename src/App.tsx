import React from 'react'
import {Switch, Route} from 'react-router-dom'
import classes from './styles/App.module.scss'
import {ErrorMessage, Header, Preloader} from './components'
import {ROUTES} from './routes'
import WeatherPage from './pages/Weather/WeatherPage'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStoreType} from './store/rootReducer'
import {appSetError, RequestStatusType} from './store/appReducer/appReducer'

const App = () => {
   const dispatch = useDispatch()
   const appStatus = useSelector<AppRootStoreType, RequestStatusType>(state => state.app.status)
   const appError = useSelector<AppRootStoreType, string | null>(state => state.app.error)

   return (
      <div className={classes.App}>
         <ErrorMessage error={appError}/>
         {
            appStatus === 'loading' && <Preloader/>
         }
         <Header/>
         <div className={classes.content}>
            <Switch>
               <Route exact path={ROUTES.HOME} render={() => <WeatherPage/>}/>
            </Switch>
         </div>
      </div>
   )
}

export default App
