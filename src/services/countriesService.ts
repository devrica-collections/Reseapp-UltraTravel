import { request } from './api';
import type { Country } from '../types/countries.type';


const BASE_URL = 'https://countries.dev/countries?fields=name,alpha3Code,region,capital,flags,population,area';

export  function getCountries(){
    return request<Country[]>(BASE_URL)
}