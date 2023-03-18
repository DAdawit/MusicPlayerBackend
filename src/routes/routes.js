const { response } = require("express");
const express = require("express");
const router = express.Router();
// const authController = require("../controller/authController");
const SongController = require("../controllers/SongController");

router.get("/", (req, res) => {
  res.send({
    status: "success",
  });
});
router.get("/hello", (req, res) => {
  res.send({
    hello: "mother",
  });
});
// router.post("/signup", authController.singup_post);
// router.post("/login", authController.login_post);
// router.post("/verifyToken", authController.verifyToken);
// router.get("/logout", authController.logout_user);

router.post("/songs", SongController.store);
router.get("/songs", SongController.index);
router.get("/songs/:id", SongController.fetchSingleSong);
router.delete("/songs/:id", SongController.destroy);
router.put("/songs/:id", SongController.update);
router.put("/update/:id", SongController.updateWithImage);
module.exports = router;
