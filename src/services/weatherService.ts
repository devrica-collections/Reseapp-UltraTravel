import { request } from "./api";
import type { LatlngResponse, WeatherResponse } from "../types/weather.type";


const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

export function getLatlng(capital: string, countryCode: string) {
    const searchParams = new URLSearchParams({
        name: capital,
        countryCode,
        count: '1',
        language: 'sv',
    })

    const url = `${BASE_URL}?${searchParams.toString()}`

    return request<LatlngResponse>(url)
}


export function getWeather(
    latitude: number,
    longitude: number
): Promise<WeatherResponse> {
    const searchParams = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        current: [
            'temperature_2m',
            'wind_speed_10m',
            'weather_code',
            'rain',
            'wind_direction_10m',
            'cloud_cover',
            'snowfall',
        ].join(','),
        temperature_unit: 'celsius',
        wind_speed_unit: 'ms',
        precipitation_unit: 'mm',
        timezone: 'auto',
    })

    const url =
        `https://api.open-meteo.com/v1/forecast?${searchParams.toString()}`

    return request<WeatherResponse>(url)
}