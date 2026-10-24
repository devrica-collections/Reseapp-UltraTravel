import { request } from './api';
import type { Country, CountriesResponse } from '../types/countries.type';

export async function getCountries(): Promise<Country[]> {
    const url = 'https://api.restcountries.com/countries/v5?limit=25&pretty=1';

    const result = await request<CountriesResponse>(url, {
        headers: {
            authorization: "rc_live_4eafcdf0238149d385f49950e29dad0e"
        }
    })

    return result.data.objects;
}
