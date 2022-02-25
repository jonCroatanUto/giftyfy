const Router = require("express").Router;
const imageRouter = Router();
const { imageController } = require("../controllers");

imageRouter.post("/newImage", imageController.uploadImage);
imageRouter.patch("/updateImage/:id", imageController.updateImageById);
imageRouter.get("/", imageController.getAllImages);
imageRouter.get("/getOneImage/:title", imageController.getImageByTitle);
imageRouter.delete("/deleteImage/:id", imageController.deleteImage);

module.exports = imageRouter;
