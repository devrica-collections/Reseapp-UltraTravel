type CountrySearchProps = {
    query: string
    onQueryChange: (query: string) => void
}

function CountrySearch({ query, onQueryChange }: CountrySearchProps) {
    return (
        <div className="space-y-2 text-left">
            <label htmlFor="country-search" className="block text-sm font-semibold">
                Sök land
            </label>
            <div className="relative">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
                >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="m16 16 4 4" />
                </svg>
                <input
                    id="country-search"
                    type="search"
                    placeholder="Till exempel Sweden eller Finland"
                    autoComplete="off"
                    aria-describedby="country-search-help"
                    className="min-h-12 w-full min-w-0 rounded-lg border border-input bg-background py-3 pr-4 pl-12 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground hover:border-primary/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:outline-none"
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                />
            </div>
            <p id="country-search-help" className="text-sm text-muted-foreground">
                Sök på landets engelska namn.
            </p>
        </div>
    )
}

export default CountrySearch
