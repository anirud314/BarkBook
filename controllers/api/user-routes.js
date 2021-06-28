const router = require('express').Router();
const { User, Post, Comment, Vote } = require('../../models');
const err = [];

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  }).then(dbUserData => {
    req.session.user_id = dbUserData.user_id
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;

    res.json(dbUserData)
  });
});

router.post('/', (req,res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).then(dbUserData => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;
    res.status(200).jsonp('new user created')
  })
})

router.post('/user/login', (req,res) => {
  if (!req.body.username) {
    err.push('Username not found')
    return;
  } else if (!req.body.password) {
    err.push('Password not found')
    return;
  } else if (username === null) {
    err.push('input a username')
    return;
  } else if (password === null) {
    err.push('input a password')
  }
  
})
module.exports = router;
