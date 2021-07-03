const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
//const user = require('./user.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

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
