const router = require("express").Router();
const { Comment } = require("../../models");

//get all the comments by post
router.get("/:post", (req, res) => {
  Comment.findAll({
    where: { post_id: req.params.post },
  })
    .then((comments) => res.status(200).send(comments))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message });
    });
});

module.exports = router;
