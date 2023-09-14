const express = require("express");
const verifyToken = require("../middleware/auth");
const getFeedPost = require('../controllers/posts.js');
const getUserPosts = require('../controllers/posts.js');
const likePosts = require('../controllers/posts.js');

const router = express.Router();

// read
router.get("/", verifyToken, getFeedPost);
router.get("/:userId/posts", verifyToken, getUserPosts);

// update
router.patch("/:id/like", verifyToken, likePosts);

module.exports = router