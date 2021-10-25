const { Users } = require("../models");

async function register(req, res) {
  const { username, password, email, ...userData } = req.body;
  console.log("userData", userData);
  try {
    const user = await Users.findOne({ email: email });

    // const encrypedPassword = await encryptString(password);
    if (!user) {
      const { _id } = await Users.create({
        username: username,
        email: email,
        password: await Users.encryptPassword(password),
        ...userData,
      });
      return res.status(200).send({
        message: `Welcome ${username} to our gif world `,
        data: _id,
      });
    } else {
      return res.status(200).send({
        message: `The user: ${username} already exist `,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}
async function login(req, res) {
  const { username, email, password } = req.body;
  try {
    const user = await Users.findOne({
      email: email,
    });

    const isPassword = await Users.comparePassword(password, user.password);
    if (user) {
      if (isPassword) {
        return res.status(200).send({
          message: `Welcome back ${user.username} `,
        });
      } else {
        return res.status(200).send({
          message: `incorrect password`,
        });
      }
    } else {
      return res.status(400).send({
        message: `Hello ${username}, you are not logged. Please register  `,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

module.exports = {
  register: register,
  login: login,
};
