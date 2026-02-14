import { API_BASE } from "../../config";
import axios from 'axios';

export function registerUser(newUserDetails) {
  return axios.post(
    `${API_BASE}/register`,  // ✅ BROWSER-RESOLVABLE
    
    newUserDetails,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}