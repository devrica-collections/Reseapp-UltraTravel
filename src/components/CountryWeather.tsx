import { useWeather } from '../hooks/useWeather'
import {getWeatherDescription} from '../utils/getWeatherDescription'

type CountryWeatherProps = {
    capital: string
    countryCode: string
    fallbackCoordinates?: [number, number]
}

function CountryWeather({capital, countryCode, fallbackCoordinates,}: CountryWeatherProps) {
    const { locationQuery, weatherQuery, location } = useWeather(
        capital,
        countryCode,
        fallbackCoordinates
    )

    if (locationQuery.isError) {
        return (
            <div>
                <p role="alert">Kunde inte hämta huvudstadens koordinater.</p>
                <button
                    type="button"
                    onClick={() => locationQuery.refetch()}
                >
                    Försök igen
                </button>
            </div>
        )
    }

    if (capital && countryCode && locationQuery.isPending) {
        return <p role="status">Hämtar koordinater...</p>
    }

    if (!location) {
        return <p>Väder kan inte visas eftersom koordinater saknas.</p>
    }

    if (weatherQuery.isPending) {
        return <p role="status">Hämtar väder...</p>
    }

    if (weatherQuery.isError) {
        return (
            <div>
                <p role="alert">Kunde inte hämta vädret.</p>
                <button
                    type="button"
                    onClick={() => weatherQuery.refetch()}
                >
                    Försök igen
                </button>
            </div>
        )
    }

    const weather = weatherQuery.data.current
    const usesCapital = Boolean(locationQuery.data?.results?.[0])

    return (
        <section>
            <h2>Aktuellt väder</h2>
            <p>
                {usesCapital
                    ? `Plats: ${capital}`
                    : 'Plats: landets koordinater'}
            </p>
            <p lang="en">{getWeatherDescription(weather.weather_code)}</p>
            <p>Temperatur: {weather.temperature_2m} °C</p>
            <p>Vind: {weather.wind_speed_10m} m/s</p>
        </section>
    )
}

export default CountryWeather