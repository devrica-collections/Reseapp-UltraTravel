import { request } from './api';
import type { Country, CountriesResponse } from '../types/countries.type';

const apiKey = import.meta.env.VITE_API_KEY;

export async function getCountries(): Promise<Country[]> {
    const url = 'https://api.restcountries.com/countries/v5?limit=25&pretty=1';

    const result = await request<CountriesResponse>(url, {
        headers: {
            authorization: `Bearer ${apiKey}`
        }
    })

    return result.data.objects;
}
