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
