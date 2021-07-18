import { parseCookies } from "nookies"
import axios from 'axios';

export function getAPIclient(ctx?: any) {
    const { 'next-piupiwer.token' : token} = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'https://piupiuwer.polijrinternal.com/',
    })

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api
}