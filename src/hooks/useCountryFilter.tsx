import { useSearchParams } from 'react-router'

export function useCountryFilter() {
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query') || ''
    const region = searchParams.get('region') || ''

    const pageFromUrl = Number(searchParams.get('page') ?? '1')

    const page = Number.isSafeInteger(pageFromUrl) && pageFromUrl > 0
    ? pageFromUrl
    : 1

    function setQuery(value: string) {
    const nextParams = new URLSearchParams(searchParams)

        if (value === '') {
            nextParams.delete('query')
        } else {
            nextParams.set('query', value)
        }

        nextParams.set('page', '1')
        setSearchParams(nextParams, { replace: true })
    }

    function setRegion(value: string) {
    const nextParams = new URLSearchParams(searchParams)

    if (value === '') {
        nextParams.delete('region')
    } else {
        nextParams.set('region', value)
    }

    nextParams.set('page', '1')
    setSearchParams(nextParams)
}

function setPage(value: number) {
    const nextParams = new URLSearchParams(searchParams)

    nextParams.set('page', String(value))

    setSearchParams(nextParams)
}

return {
    query,
    region,
    page,
    setQuery,
    setRegion,
    setPage,
}
}
