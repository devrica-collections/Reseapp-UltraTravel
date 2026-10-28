import { useQuery } from '@tanstack/react-query'
import { getCountry } from '../services/countriesService'
import { HttpError } from '../services/api'

export function useCountry(code: string | undefined) {
    const countryCode = code?.toUpperCase()
    const isValidCode = /^[A-Z]{3}$/.test(countryCode ?? '')

    return useQuery({
        queryKey: ['country', countryCode],
        queryFn: () => {
            if (!countryCode || !isValidCode) {
                throw new HttpError(404, 'Ogiltig landkod')
            }

            return getCountry(countryCode)
        },
        enabled: isValidCode,
        retry: (failureCount, error) => {
            if (error instanceof HttpError && error.status === 404) return false
            return failureCount < 3
        },
        staleTime: 1000 * 60 * 60,
    })
}
