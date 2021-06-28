const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('Breath... Encourage your teammates... Breath... Repeat...');
  const posts = [
    {body: "Hello World", vote_count: 24, image: "/", comments: [{comment:"This is bob's commentif soifu sofius odifuos ufosiufoasu foasiuf osuifosiu fosufoasufasdoifuosdu fosiuf osudfo sudfoisufos ufosuifosu fosiuf", user: {username: "Bob"}}], user: {username:"Jeffs_Post"}}
  ]
  
  res.render('homepage',{posts, layout: 'main'});
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/new-account',(req,res) => {
  res.render('newaccount');
})


module.exports = router;



//added to render comments 6-25