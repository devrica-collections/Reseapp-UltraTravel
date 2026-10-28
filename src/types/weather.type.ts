export type Latlng = {
    latitude: number
    longitude: number
}

export type LatlngResponse = {
    results?: Latlng[]
}

export type WeatherResponse = {
    current: {
        temperature_2m: number
        wind_speed_10m: number
        weather_code: number
        rain: number
        time:  string
		wind_direction_10m: number
		cloud_cover: number
		snowfall: number
    }
}