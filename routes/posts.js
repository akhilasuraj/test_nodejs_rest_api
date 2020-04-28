const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    POSTS: {
      Title: "My first post",
      description: "random data you shouldnt access",
    },
  });
});

module.exports = router;
