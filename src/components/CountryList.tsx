import { useLocation } from 'react-router'
import type { Country } from '../types/countries.type'
import CountryCard from './CountryCard'

type CountryListProps = {
    countries: Country[]
}

function CountryList({ countries }: CountryListProps) {
    const { search } = useLocation()
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
                <li key={country.alpha3Code} className="min-w-0">
                    <CountryCard country={country} search={search} />
                </li>
            ))}
        </ul>
    )
}

export default CountryList