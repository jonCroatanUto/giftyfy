const { Gifs } = require("../models");

async function upload(req, res) {
  const { owner, author, genre, title, urlGif } = req.body;

  try {
    // const encrypedPassword = await encryptString(password);

    const { _id } = await Gifs.create({
      owner: owner,
      author: author,
      genre: genre,
      title: title,
      urlGif: urlGif,
    });
    return res.status(200).send({
      message: `New track ${title} is been created ${owner} `,
      data: _id,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function getAll(req, res) {
  try {
    // const encrypedPassword = await encryptString(password);

    const gifs = await Gifs.find({});
    return res.status(200).send({
      gifs: gifs,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function getByTitle(req, res) {
  const { title } = req.params;

  try {
    // const encrypedPassword = await encryptString(password);

    const gif = await Gifs.find({ title: title });
    return res.status(200).send({
      message: "hola",
      gif: gif,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

async function updateById(req, res) {
  const gifData = req.body;
  const { id } = req.params;

  try {
    // const encrypedPassword = await encryptString(password);

    const dbResponse = await Gifs.findByIdAndUpdate(id, gifData, {
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
async function deleteGif(req, res) {
  const { id } = req.params;

  try {
    // const encrypedPassword = await encryptString(password);

    const dbResponse = await Gifs.findByIdAndRemove(id);
    return res.status(200).send({
      message: `gift deleted fine `,
      data: dbResponse,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

module.exports = {
  upload: upload,
  getAll: getAll,
  getByTitle: getByTitle,
  updateById: updateById,
  deleteGif: deleteGif,
};
