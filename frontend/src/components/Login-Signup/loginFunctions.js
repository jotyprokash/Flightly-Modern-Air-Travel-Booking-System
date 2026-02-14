import axios from 'axios';

import { API_BASE } from '../../config';

/* ======================
   LOGIN
====================== */
export function logUserIn(userCredentials) {
  return axios.post(
    `${API_BASE}/login`,
    userCredentials,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

/* ======================
   GET CURRENT USER
   (Protected route)
====================== */
export function getCurrentUser() {
  const token = localStorage.getItem('token');

  return axios.get(
    `${API_BASE}/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}