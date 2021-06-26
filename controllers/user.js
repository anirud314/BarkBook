const router = require('express').Router();
const { User, Post} = require('../../BarkBook/models')


router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }).then(dbUserData => {
        req.session.save(() => {
            req.session.userid = dbUserData.userid;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            console.log(dbUserData);
        })
    }).catch(err => {
        console.log(err)
        res.status(400).message(err);
    });
});

router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy((loggedIn) => {
            res.status(204).end(loggedIn)
        })
    }
    else {
        res.status(404).json('logged out').end();
    };
});


router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then (dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message:'User not found'})
            return;
        }
    })
})

module.exports = router;