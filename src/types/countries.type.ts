export type Country = {
    name: string;
    alpha3Code: string;
    region: string;
    capital: string;
    flags: Flag;
    population: number;
    area: number;

}

export type Flag = {
    png: string;
    svg: string;
}
