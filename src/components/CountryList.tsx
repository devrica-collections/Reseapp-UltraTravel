import { Link } from 'react-router'
import type { Country } from '../types/countries.type'

type CountryListProps = {
    countries: Country[]
}

function CountryList({ countries }: CountryListProps) {
    return (
        <ul>
            {countries.map((country) => (
                <li key={country.alpha3Code}>
                    <img
                        src={country.flags.png}
                        alt={`Flagga för ${country.name}`}
                        width={80}
                    />

                    <Link to={`/country/${country.alpha3Code}`}>
                        {country.name}
                    </Link>

                    <p>Region: {country.region}</p>

                    {country.capital && (
                        <p>Huvudstad: {country.capital}</p>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default CountryList