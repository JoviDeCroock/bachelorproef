import { get, post, put } from './_request';

const BASE_URL = 'http://localhost:8000';

export async function fetchUsers(searchString, limit, offset) {
  try {
    const query = `_page=${Math.floor(offset / limit)}&_limit=${limit}`;
    const { data: users, headers: { 'x-total-count': totalCount } } = await get(`${BASE_URL}/users?${query}`);
    return { totalCount, users };
  } catch (err) {
    throw err;
  }
}

export async function fetchUser(id) {
  try {
    const { data: user } = await get(`${BASE_URL}/users/${id}`);
    return user;
  } catch (err) {
    throw err;
  }
}

export async function fetchTotalCount() {
  try {
    const query = `_page=${1}&_limit=${1}`;
    const { headers: { 'x-total-count': totalCount } } = await get(`${BASE_URL}/users?${query}`);
    return { totalCount };
  } catch (err) {
    throw err;
  }
}

export async function createUser(user) {
  try {
    console.log(user);
    const { data: newUser } = await post(`${BASE_URL}/users/`, user);
    return newUser;
  } catch (err) {
    throw err;
  }
}

export async function updateUser(user) {
  try {
    const { data: updatedUser } = await put(`${BASE_URL}/users/${user.id}`, user);
    return updatedUser;
  } catch (err) {
    throw err;
  }
}
