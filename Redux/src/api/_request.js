import axios from 'axios';

export async function get(url) {
  return await axios.get(url);
}

export async function post(url, body) {
  return await axios.post(url, body);
}

export async function put(url, body) {
  return await axios.put(url, body);
}