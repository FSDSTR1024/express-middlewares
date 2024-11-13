const express = require("express");

const { checkUserId } = require("./middlewares");
const userController = require("./controller");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", checkUserId, userController.getUser);
router.delete("/:id", checkUserId, userController.deleteUser);
router.use(express.json());
router.post("/", userController.createUser);
router.put("/", userController.updateUser);

module.exports = router;
