const sequelize = require('../config/connection');
const {Post} = require('../models');

const postdata = [
    {
       title: 'Gud Doggo',
       user_id: 1,
       image:"/images/sample-dog-photos-2.png"
       
    },
    {
        title: 'bad Doggo',
        user_id: 2,
        image:"/images/sample-dog-photos-3.png"
        
    },
    {
        title: 'Funny Doggo',
        user_id: 3,
        image:"/images/sample-photo-dogs-1.png"
    }
];
const seedPosts = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPosts;