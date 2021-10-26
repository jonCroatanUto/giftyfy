const Router = require("express").Router;
const gifRouter = Router();
const { GifsController } = require("../controllers");

gifRouter.post("/newGif", GifsController.upload);
gifRouter.patch("/updateGif/:id", GifsController.updateById);
gifRouter.get("/", GifsController.getAll);
gifRouter.get("/getOne/:title", GifsController.getByTitle);
gifRouter.delete("/deleteGif/:id", GifsController.deleteGif);

module.exports = gifRouter;
