const router = require("express").Router();
const { Post, Comment } = require("../../models");

// get all posts
router.get("/", (req, res) => {
  Post.findAll({
    include: { all: true },
  })
    .then((posts) => res.status(200).send(posts))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message });
    });
});

//get a specific post
router.get("/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: { all: true },
  })
    .then((post) => res.status(200).send(post))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message });
    });
});

//add a new post
router.post("/", (req, res) => {
  if (!req.session.loggedIn) {
    //user not logged in
    res.status(500).send({ error: "No logged in" });
    return;
  
  }

  //do additional error check
  if (!req.body.post) {
    res.status(500).send({ error: "No post added" });
    return;
  }

  //TODO HANDLE IMAGE
  // if (errors.length > 0) {
  //   res.status(500).send({ error: errors });
  //   return;
  // }

  //we need the user id req.session.user_id
  //build the post object
  const newPost = {
    post: req.body.post,
    user_id: req.session.user_id,
  };

  Post.create(newPost)
    .then((createdPost) => res.status(200).send(createdPost))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message });
    });
});

//delete a post
router.delete("/:id", (req, res) => {
    if (!req.session.loggedIn) {
        //user not logged in
        res.status(500).send({ error: "No logged in" });
      }

    //get the post
    Post.findByPk(req.params.id)
    .then(foundPost => {
        if (!foundPost){
            res.status(400).send({error: 'Unable to find post'});
            return;
        }

        if (foundPost.user_id !== req.session.user_id){
            res.status(400).send({error: 'Post belongs to another user'});
            return;
        }

        //clean up any comments attached to this post
        Comment.destroy({ 
            where: { 'post_id': foundPost.id  }
        })
        .then(() => {
            foundPost.destroy()
            .then(()=> res.status(200).send('Successfully deleted post'));
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ error: err.message });
      });   
});

module.exports = router;