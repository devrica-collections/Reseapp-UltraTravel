import { useQuery } from '@tanstack/react-query'
import { getCountry } from '../services/countriesService'

export function useCountry(code: string | undefined) {
    return useQuery({
        queryKey: ['country', code],
        queryFn: () => {
            if (!code) {
                throw new Error('Landkod saknas')
            }

            return getCountry(code)
        },
        enabled: Boolean(code),
        staleTime: 1000 * 60 * 60,
    })
}