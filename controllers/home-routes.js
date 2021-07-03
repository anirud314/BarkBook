const router = require('express').Router();
const sequelize = require('../config/connection');
const  { User, Post, Comment }=require('../models')



// get all posts for homepage
router.get('/', (req, res) => {
  console.log('Breath... Encourage your teammates... Breath... Repeat...');
  // const posts = [
  //   {body: "Hello World", vote_count: 24, image: "/", comments: [{comment:"This is bob's commentif soifu sofius odifuos ufosiufoasu foasiuf osuifosiu fosufoasufasdoifuosdu fosiuf osudfo sudfoisufos ufosuifosu fosiuf", user: {username: "Bob"}}], user: {username:"Jeffs_Post"}}
  // ]
  Post.findAll({include:[Comment,User]})
.then(function(postsdata){ 
const posts = postsdata.map(post=>post.get({plain:true})) 
res.render('homepage',{posts, layout: 'main'});
})
.catch(function(err){
  console.log (err)
  res.json(err)
})

 
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/new-account',(req,res) => {
  res.render('new-account');
})

router.get('/singlepost',(req,res) => {
  res.render('singlepost');
})


module.exports = router;



//added to render comments 6-25