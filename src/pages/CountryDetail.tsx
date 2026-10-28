import { useParams } from 'react-router'
import { useCountry } from '../hooks/useCountry'
import CountryWeather from '../components/CountryWeather'
import CountryInfo from '../components/CountryInfo'
import CountryFacts from '../components/CountryFacts'

function CountryDetail() {
    const { code } = useParams()
    const { data: country, status, refetch } = useCountry(code)

    if (!code) {
        return <p>Landkod saknas</p>
    }

    if (status === 'pending') {
        return <p>Laddar...</p>
    }

    if (status === 'error') {
        return (
            <>
                <p role="alert">Kunde inte hämta landet.</p>
                <button type="button" onClick={() => refetch()}>
                    Försök igen
                </button>
            </>
    )
}

    return (
        <>
            <h1>{country?.name}</h1>
            <CountryFacts country={country} />
            <CountryWeather
            capital={country.capital ?? ''}
            countryCode={country.alpha2Code}
            fallbackCoordinates={country.latlng}
            />
            <CountryInfo countryName={country.name} />
        </>
    )
}

export default CountryDetail