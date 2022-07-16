const { Router } = require("express")

const UsersController = require("../controllers/UsersController");

const userRouter = Router();

function myMidlewarre(request, response, next) {
  console.log("passou por aqui");
  if (!request.body.isAdmin) {
    return response.json({ message: "não ta autorizado" })
  }
  next();
}

const usersController = new UsersController();


userRouter.post("/", myMidlewarre, usersController.create);

module.exports = userRouter;