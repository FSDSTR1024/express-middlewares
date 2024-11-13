let users = require("../usersMock");

const userService = {
  getAllUsers: () => users,
  getUserById: (id) => users.find((user) => user.id === id),
  deleteUser: (id) => {
    console.log(
      "borrando el usuario",
      users.filter((user) => user.id !== id)
    );
    users = users.filter((user) => user.id !== id);
  },

  createUser: (user) => {
    const userIds = users.map((user) => user.id);
    const userToSave = {
      id: Math.max(...userIds) + 1,
      name: user.name,
      lastName: user.lastName,
      age: user.age,
    };
    users.push(userToSave);
    return userToSave;
  },
};

module.exports = {
  userService,
};
