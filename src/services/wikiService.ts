import { request } from "./api";
import type { WikiDetail } from "../types/wiki.type";

export function getWikiDetail(countryName: string) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`;

    return request<WikiDetail>(url)
}