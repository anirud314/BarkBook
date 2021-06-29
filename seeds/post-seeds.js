const sequelize = require('../config/connection');
const {Post} = require('../models');

const postdata = [
    {
       title: 'Gud Doggo',
       user_id: 1
       
    },
    {
        title: 'bad Doggo',
        user_id: 2
        
    },
    {
        title: 'Funny Doggo',
        user_id: 3
    }
];
const seedPosts = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPosts;
