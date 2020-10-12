const express = require("express");
const router = express.Router();

const { postController } = require("../controllers");

router.get('/api/posts', postController.get);
// http://localhost:5000/api/posts


module.exports = router;