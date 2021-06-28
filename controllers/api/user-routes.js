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

router.get('/:id',  (req, res) => {
  User.findByPk(req.params.id, {
    attributes: { exclude: ['password'] }
  })
  .then(user => res.status(200).send(user))
  .catch(err => {
    console.log(err);
    res.status(500).send({error: err.message});
  });
});

//Create a user
router.post('/', (req,res) => {
  //error checking
  const errors = [];

  if (!req.body.username){
    error.push('Missing username');
  }

  if (!req.body.email){
    errors.push('Missing email address');
  }

  if (!req.body.password){
    errors.push('Missing password');
  }

  if (errors.length > 0){
    res.status(500).send({error: errors});
    return;
  }


  User.create(req.body)
  .then(newUser => {
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.email = newUser.email;
      req.session.loggedIn = true;
      newUser.password = ''; //clear the password
      res.status(200).send(newUser);
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({error: err.message});
  });
});

//login
router.post('/login', (req, res) => {
  //error checking
  const errors = [];
  if (!req.body.email){
    errors.push('Missing email address');
  }

  if (!req.body.password){
    errors.push('Missing password');
  }

  if (errors.length > 0){
    res.status(500).send({error: errors});
    return;
  }

  router.post('/login', (req,res) => {
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



  User.findByPk(req.body.email)
  .then(foundUser => {
    if (!foundUser){
      res.status(400).send({error: 'User not found'});
      return;
    }

    const validPassword = foundUser.checkPassword(req.body.password);

  })
  .catch(err => {
    console.log(err);
    res.status(500).send({error: err.message});
  });
});

router.post('/logout', (req,res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
