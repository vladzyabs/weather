import React from 'react'
import {Switch, Route} from 'react-router-dom'
import classes from './styles/App.module.scss'
import {Header, Preloader} from './components'
import {ROUTES} from './routes'
import Weather from './pages/Weather/Weather'
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
               <Route exact path={ROUTES.HOME} render={() => <Weather/>}/>
            </Switch>
         </div>
      </div>
   )
}

export default App
