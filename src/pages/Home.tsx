import { useCountries } from '../hooks/useCountries'
import { useCountryFilter } from '../hooks/useCountryFilter'
import CountryList from '../components/CountryList'
import CountrySearch from '../components/CountrySearch'
import RegionFilter from '../components/RegionFilter'
import Pagination from '../components/Pagination'
import CountryListSkeleton from '../components/CountryListSkeleton'

function Home() {
    const { data: countries, status } = useCountries()
    const { query, region, page, setQuery, setRegion, setPage } = useCountryFilter()

    if (status === 'pending') {
        return (
            <>
                <h1>Länder</h1>
                <CountryListSkeleton />
            </>
        )
    }
    if (status === 'error') return <p>Kunde inte ladda länder.</p>

    const normalizedQuery = query.trim().toLowerCase()

    const filteredCountries = countries.filter((country) => {
        const matchesQuery = country.name
            .toLowerCase()
            .includes(normalizedQuery)

        const matchesRegion = region === '' || country.region === region

        return matchesQuery && matchesRegion
    })

    const pageSize = 25

    const totalPages = Math.max(
        1,
        Math.ceil(filteredCountries.length / pageSize)
    )

    const currentPage = Math.min(page, totalPages)
    const startIndex = (currentPage - 1) * pageSize

    const visibleCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    )

    return (
        <>
        <div
            role="search"
            aria-label="Sök och filtrera länder"
            className="mx-4 mb-6 space-y-5 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm sm:mx-6 sm:p-6"
        >
            <CountrySearch
                query={query}
                onQueryChange={setQuery}
            />
            <RegionFilter
                region={region}
                onRegionChange={setRegion}
            />
            <p role="status" className="text-left text-sm text-muted-foreground">
                {filteredCountries.length} {filteredCountries.length === 1 ? 'land' : 'länder'} matchar dina val
            </p>
        </div>
        {filteredCountries.length === 0 ? (
            <p role="status">Inga länder matchar dina kriterier</p>
        ) : (
            <CountryList countries={visibleCountries} />
        )}       
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
        />
        </>
    )
}

export default Home
