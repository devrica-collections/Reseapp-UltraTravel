import { useQuery } from '@tanstack/react-query'
import { getLatlng, getWeather } from '../services/weatherService'

export function useWeather(capital: string, countryCode: string, fallbackCoordinates?: [number, number]) {
    const fallbackCords = Boolean(capital && countryCode)
    const locationQuery = useQuery({
        queryKey: ['coordinates', capital, countryCode],
        queryFn: () => getLatlng(capital, countryCode),
        enabled: fallbackCords,
        staleTime: 1000 * 60 * 60,
    })

    const capitalLocation = locationQuery.data?.results?.[0]

    const canUseFallback =
        !fallbackCords || locationQuery.isSuccess

    const fallbackLocation =
        canUseFallback && fallbackCoordinates
            ? {
                latitude: fallbackCoordinates[0],
                longitude: fallbackCoordinates[1],
            }
            : undefined

    const location = capitalLocation ?? fallbackLocation
        const weatherQuery = useQuery({
            queryKey: [
                'weather',
                location?.latitude,
                location?.longitude,
            ],
            queryFn: () => {
                if (!location) {
                    throw new Error('Koordinater saknas')
                }

                return getWeather(location.latitude, location.longitude)
            },
            enabled: location !== undefined,
            staleTime: 1000 * 60 * 5,
        })

    return { locationQuery, weatherQuery, location }
}