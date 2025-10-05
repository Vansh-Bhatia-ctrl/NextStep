const express = require("express");
const router = express.Router();
const { getAuth } = require("@clerk/express");
const { getChatMessages } = require("../controllers/chatController");

router.get("/history", async (req, res) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "user is not authenticated." });
    }
    const messages = await getChatMessages(userId);
    res.status(200).json({ messages: messages });
  } catch (error) {
    console.error("Error in GET /history:", error);
    res.status(500).json({ error: error.message, Actualerror: error });
  }
});

module.exports = router;
