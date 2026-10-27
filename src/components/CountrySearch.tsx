type CountrySearchProps = {
    query: string
    onQueryChange: (query: string) => void
}

function CountrySearch({ query, onQueryChange }: CountrySearchProps) {
    return (
        <div>
            <label htmlFor="country-search">Sök land</label>
            <input
                id="country-search"
                type="search"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
            />
        </div>
    )
}

export default CountrySearch