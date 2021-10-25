const Router = require("express").Router;
const userRouter = Router();
const { UsersController } = require("../controllers");

userRouter.post("/register", UsersController.register);
userRouter.post("/login", UsersController.login);

module.exports = userRouter;
