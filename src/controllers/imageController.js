const { Images } = require("../models");

async function uploadImage(req, res) {
  const { author, title, urlImage } = req.body;
  console.log(author, title, urlImage);
  try {
    // const encrypedPassword = await encryptString(password);
    const image = await Images.findOne({ title: title });
    console.log(image);
    if (!image) {
      const { _id } = await Images.create({
        //owner: owner,
        author: author,

        title: title,
        urlImage: urlImage,
      });
      return res.status(200).send({
        message: `New image ${title} is been uploaded  `,
        data: _id,
      });
    } else {
      return res.status(200).send({
        message: "An Image with this title already exist",
        image: image,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function getAllImages(req, res) {
  try {
    // const encrypedPassword = await encryptString(password);

    const images = await Images.find({});
    return res.status(200).send({
      message: "this are the images",
      images: images,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function getImageByTitle(req, res) {
  const { title } = req.params;

  try {
    // const encrypedPassword = await encryptString(password);

    const image = await Images.find({ title: title });
    return res.status(200).send({
      message: "hola",
      image: image,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function updateImageById(req, res) {
  const { urlImage, ...restImageData } = req.body;
  const { id } = req.params;
  console.log(restImageData);
  try {
    // const encrypedPassword = await encryptString(password);

    const dbResponse = await Images.findByIdAndUpdate(id, restImageData, {
      new: true,
    });

    return res.status(200).send({
      message: `gift updated fine `,
      data: dbResponse,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}
async function deleteImage(req, res) {
  const { id } = req.params;

  try {
    // const encrypedPassword = await encryptString(password);

    const dbResponse = await Images.findByIdAndRemove(id);
    return res.status(200).send({
      message: `image deleted fine `,
      data: dbResponse,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

module.exports = {
  uploadImage: uploadImage,
  getAllImages: getAllImages,
  getImageByTitle: getImageByTitle,
  updateImageById: updateImageById,
  deleteImage: deleteImage,
};
