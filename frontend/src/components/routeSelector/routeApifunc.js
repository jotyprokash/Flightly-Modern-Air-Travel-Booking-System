import axios from 'axios';
import { API_BASE } from '../../config';

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = `${API_BASE}/booking/`;
    let incoming = await axios.post(baseURL, { startCity, destination });
    return incoming;
}                                      