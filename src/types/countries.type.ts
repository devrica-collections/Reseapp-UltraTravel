export type Country = {
    name: string;
    nativeName: string;
    alpha2Code: string;
    alpha3Code: string;
    region: string;
    subregion: string;
    capital: string;
    flags: Flag;
    population: number;
    area: number;
    languages: {
        name: string;
        nativeName: string;
    }[];
    latlng?: [number, number];
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];

}

export type Flag = {
    png: string;
    svg: string;
}
