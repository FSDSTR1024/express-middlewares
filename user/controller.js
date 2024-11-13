const { userService } = require("./service");

const userController = {
  getAllUsers: (req, res) => {
    const users = userService.getAllUsers();
    res.send(users);
  },
  getUser: (req, res) => {
    const { id } = req.params;
    const user = userService.getUserById(parseInt(id));
    if (user) res.send(user);
    else res.status(404).send({ type: "error", msg: "Usuario no encontrado" });
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    userService.deleteUser(parseInt(id));
    res.send("ok");
  },

  createUser: (req, res) => {
    try {
      const user = req.body;

      const userToSave = userService.createUser(user);
      res.send(userToSave);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  updateUser: (req, res) => {},
};

module.exports = userController;
