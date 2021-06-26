const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('Breath... Encourage your teammates... Breath... Repeat...');
  
  res.render('homepage', {});
});

router.get('/login', (req,res) => {
  res.render('login');
});


module.exports = router;
