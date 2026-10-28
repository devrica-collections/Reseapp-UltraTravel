import { Link, useLocation, useParams } from 'react-router'
import { useCountry } from '../hooks/useCountry'
import CountryWeather from '../components/CountryWeather'
import CountryInfo from '../components/CountryInfo'
import CountryFacts from '../components/CountryFacts'
import ContentSkeleton from '../components/ContentSkeleton'
import { HttpError } from '../services/api'
import './CountryDetail.css'

function CountryDetail() {
    const { code } = useParams()
    const { data: country, status, error, refetch } = useCountry(code)
    const { search } = useLocation()
    const backToList = `/${search}`

    const isValidCode = /^[a-zA-Z]{3}$/.test(code ?? '')
    const isNotFound = !isValidCode || (error instanceof HttpError && error.status === 404)

    if (isNotFound) {
        return (
            <div className="country-detail">
                <Link className="detail-back" to={backToList}>Tillbaka till landlistan</Link>
                <h1>Landet hittades inte</h1>
                <p role="alert">Kontrollera landkoden eller välj ett land i listan.</p>
            </div>
        )
    }

    if (status === 'pending') {
        return (
            <div className="country-detail">
                <Link className="detail-back" to={backToList}>Tillbaka till landlistan</Link>
                <ContentSkeleton label="Hämtar landet..." showImage />
            </div>
        )
    }

    if (status === 'error') {
        return (
            <div className="country-detail">
                <Link className="detail-back" to={backToList}>Tillbaka till landlistan</Link>
                <h1>Kunde inte hämta landet</h1>
                <p role="alert">
                    {error instanceof TypeError
                        ? 'Det gick inte att ansluta. Kontrollera din internetanslutning och försök igen.'
                        : 'Ett fel uppstod vid hämtningen. Försök igen om en stund.'}
                </p>
                <button className="detail-retry" type="button" onClick={() => refetch()}>
                    Försök igen
                </button>
            </div>
        )
    }

    return (
        <div className="country-detail">
            <Link className="detail-back" to={backToList}>Tillbaka till landlistan</Link>
            <h1>{country.name}</h1>
            <div className="detail-overview">
                <CountryFacts country={country} />
                <CountryWeather
                    capital={country.capital ?? ''}
                    countryCode={country.alpha2Code}
                    fallbackCoordinates={country.latlng}
                />
            </div>
            <CountryInfo countryName={country.name} />
        </div>
    )
}

export default CountryDetail
