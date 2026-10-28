import { useWeather } from '../hooks/useWeather'
import {getWeatherDescription} from '../utils/getWeatherDescription'
import ContentSkeleton from './ContentSkeleton'

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
            <div className="detail-panel">
                <h2>Aktuellt väder</h2>
                <p role="alert">Kunde inte hämta huvudstadens koordinater.</p>
                <button
                    className="detail-retry"
                    type="button"
                    onClick={() => locationQuery.refetch()}
                >
                    Försök igen
                </button>
            </div>
        )
    }

    if (capital && countryCode && locationQuery.isPending) {
        return <ContentSkeleton label="Hämtar huvudstadens koordinater..." />
    }

    if (!location) {
        return (
            <section className="detail-panel">
                <h2>Aktuellt väder</h2>
                <p>Väder kan inte visas eftersom koordinater saknas.</p>
            </section>
        )
    }

    if (weatherQuery.isPending) {
        return <ContentSkeleton label="Hämtar väder..." />
    }

    if (weatherQuery.isError) {
        return (
            <div className="detail-panel">
                <h2>Aktuellt väder</h2>
                <p role="alert">Kunde inte hämta vädret.</p>
                <button
                    className="detail-retry"
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
        <section className="detail-panel">
            <h2>Aktuellt väder</h2>
            <p className="weather-place">
                {usesCapital
                    ? `Plats: ${capital}`
                    : 'Plats: landets koordinater'}
            </p>
            <p lang="en" className="weather-description">{getWeatherDescription(weather.weather_code)}</p>
            <dl className="weather-values">
                <div>
                    <dt>Temperatur</dt>
                    <dd>{weather.temperature_2m} °C</dd>
                </div>
                <div>
                    <dt>Vind</dt>
                    <dd>{weather.wind_speed_10m} m/s</dd>
                </div>
            </dl>
        </section>
    )
}

export default CountryWeather
