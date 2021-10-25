const Router = require("express").Router;
const gifRouter = Router();
const { GifsController } = require("../controllers");

gifRouter.post("/newGif", GifsController.upload);
gifRouter.patch("/updateGif", GifsController.uploadById);
gifRouter.get("/", GifsController.getAll);
gifRouter.get("/getOne", GifsController.getByTitle);
gifRouter.post("/deleteGif", GifsController.deleteGif);

module.exports = gifRouter;
