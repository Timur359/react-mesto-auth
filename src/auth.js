//export const BASE_URL = 'https://auth.nomoreparties.co';

export const BASE_URL = 'https://api.express.mesto.nomoredomains.work'

const handleOriginalResponse = (res) => {
  return res.json().then((json) => {
    return res.ok ? json : Promise.reject(json)
  })
};

const headers = {
 'Content-Type': 'application/json',
};

export const register = ({ email, password }) => {
 fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ email, password }),
 }).then((res)=> handleOriginalResponse(res));
};

export const authorize = ({ email, password }) => {
 fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ email, password }),
 }).then((res)=> handleOriginalResponse(res));
};

export const checkToken = (token) => {
 fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
   ...headers,
   Authorization: `Bearer ${token}`,
  },
 }).then((res)=> handleOriginalResponse(res));
};
