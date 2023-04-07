const User1 = require("../models/user1.js");
var bcrypt = require("bcryptjs");

const findAllUser = async (req, res) => {
  try {
    const findUser = await User1.findAll({
      attributes: [
        ["firstname", "FirstName"],
        ["lastname", "LastName"],
        ["email", "Email"],
      ],
    });
    if (findUser) {
      res.status(200).json(findUser);
    } else {
      res.status(400).json({ message: "Their is no users in Database" });
    }
  } catch (error) {
    console.log("Here I found error while finding user in db   ==>  " + error);
  }
};

const findUserById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  await User1.findOne({
    where: {
      id,
    },
    attributes: [
      ["firstname", "FirstName"],
      ["email", "Email"],
    ],
  })
    .then((user) => {
      if (!user) {
        res.send("NO USER FOUND");
      }
      res.json(user);
    })
    .catch((err) =>
      console.log("Here I found error while finding user in db   ==>  " + err)
    );
};

const findUserByEmailAndPassword = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User1.findOne({
      where: {
        email,
      },
    });
    if (findUser) {
      const validPassword = await bcrypt.compare(password, findUser.password);
      if (validPassword) {
        res.status(200).json({ message: "Successfully login" });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.send({ message: "NO USER FOUND" });
    }
  } catch (err) {
    console.log("Here I found error while finding user in db   ==>  " + err);
  }
};

const addUser = async (req, res) => {
  console.log("req", req.body);
  const { firstName, lastName, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const findUser = await User1.findOne({
      where: {
        email,
      },
    });
    if (findUser) {
      res.json({ message: "This Email Already Exist" });
    } else {
      try {
        const createUser = await User1.create({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: hashPassword,
        });
        if (createUser) {
          res
            .status(200)
            .json({ message: "User has been created successfully " });
        } else if (!createUser) {
          res.send(400).json({ message: "Unable to create user" });
        }
      } catch (ex1) {
        console.log(
          "Here I found error while creating user in db   ==>  " + ex1
        );
      }
    }
  } catch (ex) {
    console.log("Here I found error while finding user in db   ==>  " + ex);
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const deleteuser = await User1.destroy({
      where: {
        email: email,
      },
    });
    if (deleteuser) {
      res.status(200).json({ message: "User Deleted Successfully" });
    } else {
      res.status(400).json({ message: "User Does Not Exist In This Database" });
    }
  } catch (error) {
    console.log("Here I found error while finding user in db   ==>  " + error);
  }
};

module.exports = {
  addUser,
  findAllUser,
  findUserById,
  findUserByEmailAndPassword,
  deleteUser,
};
