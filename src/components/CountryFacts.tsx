import type { Country } from '../types/countries.type'

type CountryFactsProps = {
    country: Country
}

function CountryFacts({ country }: CountryFactsProps) {
    const languages = country.languages
        .map((language) => language.name)
        .join(', ')

    const currencies = country.currencies
        .map((currency) => `${currency.name} (${currency.code})`)
        .join(', ')

    return (
        <section>
            <h2>Basfakta</h2>

            <img
                src={country.flags.png}
                alt={`Flagga för ${country.name}`}
                width={160}
            />

            <dl>
                <dt>Namn på landets eget språk</dt>
                <dd>{country.nativeName || 'Uppgift saknas'}</dd>

                <dt>Region</dt>
                <dd>{country.region || 'Uppgift saknas'}</dd>

                <dt>Delregion</dt>
                <dd>{country.subregion || 'Uppgift saknas'}</dd>

                <dt>Huvudstad</dt>
                <dd>{country.capital || 'Uppgift saknas'}</dd>

                <dt>Befolkning</dt>
                <dd>{country.population.toLocaleString('sv-SE')}</dd>

                <dt>Språk</dt>
                <dd>{languages || 'Uppgift saknas'}</dd>

                <dt>Valuta</dt>
                <dd>{currencies || 'Uppgift saknas'}</dd>
            </dl>
        </section>
    )
}

export default CountryFacts