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
        <section className="detail-panel">
            <h2>Basfakta</h2>

            <img
                src={country.flags.png}
                alt={`Flagga för ${country.name}`}
                width={160}
                className="detail-flag"
            />

            <dl>
                <div className="fact-row">
                    <dt>Namn på landets eget språk</dt>
                    <dd>{country.nativeName || 'Uppgift saknas'}</dd>
                </div>

                <div className="fact-row">
                    <dt>Region</dt>
                    <dd>{country.region || 'Uppgift saknas'}</dd>
                </div>

                <div className="fact-row">
                    <dt>Delregion</dt>
                    <dd>{country.subregion || 'Uppgift saknas'}</dd>
                </div>

                <div className="fact-row">
                    <dt>Huvudstad</dt>
                    <dd>{country.capital || 'Uppgift saknas'}</dd>
                </div>

                <div className="fact-row">
                    <dt>Befolkning</dt>
                    <dd>{country.population.toLocaleString('sv-SE')}</dd>
                </div>

                <div className="fact-row">
                    <dt>Språk</dt>
                    <dd>{languages || 'Uppgift saknas'}</dd>
                </div>

                <div className="fact-row">
                    <dt>Valuta</dt>
                    <dd>{currencies || 'Uppgift saknas'}</dd>
                </div>
            </dl>
        </section>
    )
}

export default CountryFacts
