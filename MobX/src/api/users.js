import { get, post, put } from './_request';

const BASE_URL = 'http://localhost:3001';

export async function fetchUsers(searchString, limit, offset) {
  try {
    const query = `_page=${Math.floor(offset / limit)}&_limit=${limit}`;
    const { data: users } = await get(`${BASE_URL}/users?${query}`);
    return users;
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

export async function createUser(user) {
  try {
    const { data: newUser } = await post(`${BASE_URL}/users/`, user);
    return newUser;
  } catch (err) {
    throw err;
  }
}

export async function updateUser(id, user) {
  try {
    const { data: updatedUser } = await put(`${BASE_URL}/users/${id}`, user);
    return updatedUser;
  } catch (err) {
    throw err;
  }
}
