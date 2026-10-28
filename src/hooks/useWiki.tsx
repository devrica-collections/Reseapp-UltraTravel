import { useQuery } from '@tanstack/react-query'
import { getWikiDetail } from '../services/wikiService'

export function useWiki(countryName: string) {
    return useQuery({
        queryKey: ['wiki', countryName],
        queryFn: () => getWikiDetail(countryName),
        enabled: Boolean(countryName),
        staleTime: 1000 * 60 * 60,
    })
}