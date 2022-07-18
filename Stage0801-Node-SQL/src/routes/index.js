const { Router } = require("express")

const userRouter = require("./users.routes.js")

const routes = Router();
routes.use("/users", userRouter)

module.exports = routes;
