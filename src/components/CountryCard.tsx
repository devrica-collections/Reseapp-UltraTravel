import { Link } from 'react-router'
import type { Country } from '../types/countries.type'
import { Card, CardContent } from '@/components/ui/card'

type CountryCardProps = {
    country: Country
    search: string
}

function CountryCard({ country, search }: CountryCardProps) {
    return (
        <Link
            to={`/country/${country.alpha3Code}${search}`}
            className="block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
            <Card className="h-full text-left transition-shadow hover:shadow-md">
                <CardContent className="space-y-4">
                    <img
                        src={country.flags.png}
                        alt={`Flagga för ${country.name}`}
                        className="h-32 w-full object-contain"
                    />

                    <h3 className="text-lg font-semibold">
                        {country.name}
                    </h3>

                    <p>Region: {country.region}</p>

                    {country.capital && (
                        <p>Huvudstad: {country.capital}</p>
                    )}
                </CardContent>
            </Card>
        </Link>
    )
}

export default CountryCard