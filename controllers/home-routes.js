const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('Breath... Encourage your teammates... Breath... Repeat...');
  
  res.render('homepage', {layout: 'main'});
});

router.get('/login', (req, res) => {
  res.render('login', {layout: 'main'});
})


module.exports = router;
