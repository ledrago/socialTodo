const express = require("express");
const router = express.Router();

// @route get api/post
// @desc Test route
// @access Public
router.get("/", (req, res) => res.send("Post route"));

module.exports = router;
