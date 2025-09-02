const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { clerkMiddleware, requireAuth, getAuth } = require("@clerk/express");

const saveUserInfo = require("./routes/saveuserInfoToDb");
const saveQuestionsToDb = require("./routes/saveQues");

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//Clerk authentication
app.use(
  clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY, // Add this if you have it
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.get("/", (_req, res) => res.send("API up 🚀"));

app.get("/api/ping", (_req, res) => res.json({ ok: true }));

app.get("/api/me", requireAuth(), (req, res) => {
  const { userId } = getAuth(req);
  res.json({ userId });
});

app.use("/api/saveUser", saveUserInfo);
app.use("/api/saveQuestions", saveQuestionsToDb);

app.use((err, _req, res, _next) => {
  if (err && err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
