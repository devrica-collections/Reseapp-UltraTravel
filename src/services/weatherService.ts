import { fetchWeatherApi } from "openmeteo";
import { request } from "./api";
import type { Latlng } from "../types/weather.type";


const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

export function getLatlng() {
    return request<[Latlng]>(BASE_URL)
}


const params = {
	latitude: 55.6059,
	longitude: 13.0007,
	daily: ["temperature_2m_max", "temperature_2m_min", "rain_sum", "snowfall_sum", "wind_speed_10m_max", "wind_direction_10m_dominant", "uv_index_max", "weather_code"],
	wind_speed_unit: "ms",
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	daily: {
		time: Array.from(
			{ length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() }, 
			(_ , i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m_max: daily.variables(0)!.valuesArray(),
		temperature_2m_min: daily.variables(1)!.valuesArray(),
		rain_sum: daily.variables(2)!.valuesArray(),
		snowfall_sum: daily.variables(3)!.valuesArray(),
		wind_speed_10m_max: daily.variables(4)!.valuesArray(),
		wind_direction_10m_dominant: daily.variables(5)!.valuesArray(),
		uv_index_max: daily.variables(6)!.valuesArray(),
		weather_code: daily.variables(7)!.valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log("\nDaily data:\n", weatherData.daily)
