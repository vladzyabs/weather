import React from 'react'
import {Switch, Route} from 'react-router-dom'
import classes from './styles/App.module.scss'
import {Header, Preloader} from './components'
import {ROUTES} from './routes'
import WeatherPage from './pages/Weather/WeatherPage'
import {useSelector} from 'react-redux'
import {AppRootStoreType} from './store/rootReducer'
import {RequestStatusType} from './store/appReducer/appReducer'

const App = () => {

   const appStatus = useSelector<AppRootStoreType, RequestStatusType>(state => state.app.status)

   return (
      <div className={classes.App}>
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
