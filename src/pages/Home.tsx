import { useCountries } from '../hooks/useCountries'
import { Link } from 'react-router'

function Home() {
    const { data: countries, status } = useCountries()

    if (status === 'pending') return <p>Laddar...</p>
    if (status === 'error') return <p>Kunde inte ladda länder.</p>

    return (
        <>
        <h1>Länder</h1>
        <p role="status">{status}</p>
        <p>Antal hämtade länder: {countries.length}</p>
        <ul>
            {countries.map((country) => (
                <li key={country.alpha3Code}>
                    <Link to={`/country/${country.alpha3Code}`}>
                        {country.name}
                    </Link>
                    {' – '}
                    {country.region}
                </li>
            ))}
        </ul>
        </>
    )
}

export default Home
