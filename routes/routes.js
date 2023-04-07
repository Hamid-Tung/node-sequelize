const { Router } = require("express");
const controller = require("../controller/controller.js");

const router = Router();

router.get("/finduser1", controller.findAllUser);
router.get("/finduser/:id", controller.findUserById);
router.post("/login", controller.findUserByEmailAndPassword);
router.post("/add", controller.addUser);
router.delete("/delete" , controller.deleteUser)

module.exports = router;
