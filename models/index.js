// import all models
const User = require('./User');
<<<<<<< HEAD
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

=======
const Comment = require('./Comment');
const Post = require('./Post');

//create associations
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
User.hasMany(Post, {
    foreignKey: 'user_id'
});

<<<<<<< HEAD
Comment.belongsTo(Post, {
     foreignKey: 'post_id'
=======
Post.belongsTo(User, {
    foreignKey: 'user_id',
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

<<<<<<< HEAD
Post.hasMany(Comment, {
=======
Comment.belongsTo(Post, {
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

<<<<<<< HEAD
module.exports = { User, Post, Comment };
=======
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
module.exports = { User };
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
