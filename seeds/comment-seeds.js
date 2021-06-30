const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
    { 
        user_id: 1,
        post_id: 2,
        comment_text: 'bad doggo very bad'
    },
    { 
        user_id: 3,
        post_id: 2,
        comment_text: 'Y u mad at doggo'
    },
    { 
        user_id: 2,
        post_id: 1,
        comment_text: 'Cute doggo, doggo is good friend'
    },
    { 
        user_id: 1,
        post_id: 3,
        comment_text: 'LOLOLOL'
    },
];

const seedComments = () => Comment.bulkCreate(commentdata, {individualHooks: true});

module.exports = seedComments;