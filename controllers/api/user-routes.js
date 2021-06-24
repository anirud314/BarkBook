const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
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
