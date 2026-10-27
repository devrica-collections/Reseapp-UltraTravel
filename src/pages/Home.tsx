import { useCountries } from '../hooks/useCountries'
import { useCountryFilter } from '../hooks/useCountryFilter'
import CountryList from '../components/CountryList'
import CountrySearch from '../components/CountrySearch'
import RegionFilter from '../components/RegionFilter'
import Pagination from '../components/Pagination'

function Home() {
    const { data: countries, status } = useCountries()
    const { query, region, page, setQuery, setRegion, setPage } = useCountryFilter()

    if (status === 'pending') return <p>Laddar...</p>
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
        <h1>Länder</h1>
        <CountrySearch
            query={query}
            onQueryChange={setQuery}
        />
        <RegionFilter
            region={region}
            onRegionChange={setRegion}
        />
        <p role="status">{status}</p>
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
