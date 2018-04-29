// Functions as Mock api
const TIMEOUT = 250;
const ENTITY_AMOUNT = 1000;

const users = [];
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function fetchUsers(searchString, limit, offset) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredUsers = users;
      // When there's a searchString we look for the user
      if (searchString) {
        filteredUsers = users.filter(u => u.name.contains(searchString));
      }
      // Take pagination in account
      filteredUsers = filteredUsers.slice(offset, offset + limit);

      // Return the users
      resolve(filteredUsers);
    }, TIMEOUT);
  });
}

export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userId = Number(id);
      const user = users.find(u => u.id === userId);
      if (!user) {
        reject(new Error('User not found'));
      }
      // Return the user
      resolve(user);
    }, TIMEOUT);
  });
}

export function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user || !user.name) {
        reject(new Error('A name is required'));
      }
      users.push(user);
      // Return the new user
      resolve(user);
    }, TIMEOUT);
  });
}

export function updateUser(id, user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const alreadyExists = users.find(u => u.id === id);
      if (!alreadyExists) {
        reject(new Error('User not found'));
      }
      const index = users.indexOf(alreadyExists);
      users[index] = {
        ...user,
      };
      // Return the updated user
      resolve(users[index]);
    }, TIMEOUT);
  });
}

export function seedData() {
  for (let id = 0; id < ENTITY_AMOUNT; id += 1) {
    let name = '';
    for (let i = 0; i < 5; i += 1) {
      name += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    users.push({
      id,
      name,
    });
  }
}
