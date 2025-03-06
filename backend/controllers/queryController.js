const Query = require("../models/Query");
const axios = require("axios");

exports.generateResponse = async (req, res) => {
  try {
    const { query } = req.body;
    const response = await axios.post(
      "https://api.cursor.sh/v1/generate",
      { prompt: query },
      { headers: { Authorization: `Bearer ${process.env.CURSOR_AI_API_KEY}` } }
    );
    const newQuery = new Query({
      userId: req.user.userId,
      query,
      response: response.data,
    });
    await newQuery.save();
    res.json(newQuery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
