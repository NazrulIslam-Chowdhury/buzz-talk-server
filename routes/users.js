const express = require("express");
const verifyToken = require("../middleware/auth");
const getUser = require("../controllers/users");
const getUserFriends = require("../controllers/users");
const addRemoveFriend = require("../controllers/users");


const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

module.exports = router;