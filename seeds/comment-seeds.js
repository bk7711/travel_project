const { Comment } = require("../models");

const commentdata = [];

const seedComment = () => Comment.bulkCreate(commentdata);
module.exports = seedComment;
