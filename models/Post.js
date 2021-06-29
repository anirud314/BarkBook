const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

<<<<<<< HEAD
// create our User model
class Post extends Model {
  // set up method to run on instance data (per user) to check passwor  
}

// create fields/columns for User model
=======

class Post extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
            'vote_count'
          ]
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for Post model
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
<<<<<<< HEAD
    post: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
=======
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    user_id: {
      type: DataTypes.INTEGER,
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
<<<<<<< HEAD
    timestamps: false,
=======
>>>>>>> 403b88f20fc48dc3262764a451845536135e218d
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;