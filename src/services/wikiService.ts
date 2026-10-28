import { request } from "./api";
import type { WikiDetail } from "../types/wiki.type";

export function getWikiDetail(code: string) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(code)}`;

    return request<WikiDetail>(url)
}