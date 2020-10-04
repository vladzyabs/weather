import React from 'react'
import {Switch, Route} from 'react-router-dom'
import classes from './styles/App.module.scss'
import {ErrorMessage, Header, Preloader} from './components'
import {ROUTES} from './routes'
import WeatherPage from './pages/Weather/WeatherPage'
import {useSelector} from 'react-redux'
import {AppRootStoreType} from './store/rootReducer'
import {RequestStatusType} from './store/appReducer/appReducer'

const AboutPage = React.lazy(() => import('./pages/About/About'))

const App = () => {
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
            <React.Suspense fallback={<Preloader/>}>
               <Switch>
                  <Route exact path={ROUTES.HOME} render={() => <WeatherPage/>}/>
                  <Route exact path={ROUTES.ABOUT} render={() => <AboutPage/>}/>
               </Switch>
            </React.Suspense>
         </div>
      </div>
   )
}

export default App
