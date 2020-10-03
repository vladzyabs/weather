export type ResponseType<T = {}> = {
   count: number
   data: T[]
}

export type GetWeatherPT = {
   city: string
}

export type GetWeatherRT = {
   city_name: string            // (string optional): City name (closest)
   state_code: string              // (string optional): State abbreviation
   country_code: string            // (string optional): Country abbreviation
   timezone: string                // (string optional): Local IANA time zone
   lat: number                  // (number optional): Latitude
   lon: number                  // (number optional): Longitude
   station: string                 // (string optional): Source Station ID
   vis: number                     // (integer optional): Visibility - default (M)
   rh: number                   // (integer optional): Relative humidity (%)
   dewpt: number                   // (number optional): Dew point temperature - default (C)
   wind_dir: number             // (integer optional): Wind direction (degrees)
   wind_cdir: string               // (string optional): Cardinal wind direction
   wind_cdir_full: string       // (string optional): Cardinal wind direction (text)
   wind_speed: number           // (number optional): Wind speed - Default (m/s)
   temp: number                 // (number optional): Temperature - Default (C)
   app_temp: number             // (number optional): Apparent temperature - Default (C)
   clouds: number               // (integer optional): Cloud cover (%)
   datetime: string                // (string optional): Cycle Hour (UTC) of observation
   ob_time: string                 // (string optional): Full time (UTC) of observation (YYYY-MM-DD HH:MM)
   ts: number                      // (number optional): Unix Timestamp
   sunrise: string              // (string optional): Time (UTC) of Sunrise (HH:MM)
   sunset: string               // (string optional): Time (UTC) of Sunset (HH:MM)
   slp: number                     // (number optional): Mean sea level pressure in millibars (mb)
   pres: number                 // (number optional): Pressure (mb)
   aqi: number                     // (number optional): Air quality index (US EPA standard 0 to +500)
   uv: number                      // (number optional): UV Index
   solar_rad: number               // (number optional): Estimated solar radiation (W/m^2)
   ghi: number                     // (number optional): Global horizontal irradiance (W/m^2)
   dni: number                     // (number optional): Direct normal irradiance (W/m^2)
   dhi: number                     // (number optional): Diffuse horizontal irradiance (W/m^2)
   elev_angle: number              // (number optional): Current solar elevation angle (Degrees)
   hour_angle: number              // (number optional): Current solar hour angle (Degrees)
   pod: string                     // (string optional): Part of the day (d = day n = night)
   precip: number               // (number optional): Precipitation in last hour - Default (mm)
   snow: number                 // (number optional): Snowfall in last hour - Default (mm)
   weather: {
      icon: string                  // "c04d"
      code: number                  // 804
      description: string           // "Overcast Clouds"
   }
}
