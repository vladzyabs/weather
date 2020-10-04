import React from 'react'
import classes from './About.module.scss'

const AboutPage = () => {
   return (
      <div className={classes.container}>
         <h1>О приложении</h1>
         <p>Weather - показывает актуальную погоду для запрашиваемого Вами города.</p>
         <p>Информация о погоде берется с <a href="https://www.weatherbit.io"  target="_blank">weatherbit.io</a></p>
         <p>В проекте используется интерактивная карта от Yandex. (<a href="https://yandex.by/maps" target="_blank">yandex maps</a>)</p>
         <p>Приложение разработано на React.js с использование redux, axios, thunk и других инструментов.</p>
         <p>Разработчик: <a href="mailto:vladzyaba@gmail.com">Зябский Владислав</a></p>
      </div>
   )
}

export default React.memo(AboutPage)
