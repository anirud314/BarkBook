const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('Breath... Encourage your teammates... Breath... Repeat...');
  const posts = [
    {body: "Hello world ", vote_count: 24, image: "/", comments: [{comment:"Hey Peety nice to meet you!! Welcome to BarkBook! We've got a huge group of friends who hang out at the Fort Funston Dog park every other Sunday. Anyone is welcome to join us.  Make sure to bring a snack. It's always a blast!", user: {username: "Bob6419"}}], user: {username:"Peety_SFO"}}
  ]
  
  res.render('homepage',{posts, layout: 'main'});
})

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/newaccount',(req,res) => {
  res.render('newaccount');
})



router.get('/singlepost',(req,res) => {
  res.render('singlepost');
})


module.exports = router;



//added to render comments 6-25