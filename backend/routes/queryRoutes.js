const express = require("express");
const { generateResponse } = require("../controllers/queryController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/generate", authMiddleware, generateResponse);

module.exports = router;
