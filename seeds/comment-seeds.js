const { Comment } = require("../models");

const commentdata = [
  {
    id: 1,
    comment_text:
      "I think this is a great idea. We should go some time in March when the weather will be warm in that hemisphere.",
    user_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);
module.exports = seedComment;
