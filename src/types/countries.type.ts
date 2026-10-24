export type Country = {
    names: {
        common: string;
    };
    region: string;
}

export type CountriesResponse = {
    data: {
        objects: Country[];
    };
}

export type Flag = {
    png: string;
}
