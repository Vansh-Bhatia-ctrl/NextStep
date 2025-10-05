require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const { clerkMiddleware, requireAuth, getAuth } = require("@clerk/express");

// 📦 Route imports
const saveUserInfo = require("./routes/saveuserInfoToDb");
const saveQuestionsToDb = require("./routes/saveQues");
const getQuestionsFromDb = require("./routes/fetchQuestionsFromDB");
const saveAnswersToDb = require("./routes/saveAnswers");
const evaluateAnswers = require("./routes/evaluateAnswers");
const saveModule = require("./routes/SaveCourse");
const saveCareerPath = require("./routes/careerpath");
const sendLearningModules = require("./routes/sendLearningContent");
const getUserDomain = require("./routes/fetchUserDomain");
const getChatHistory = require("./routes/aiChat");

const chatSockets = require("./sockets/chatSockets");

const app = express();

 
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

 
app.use(
  clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  })
);

 
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

 
app.get("/", (_req, res) => res.send("API up 🚀"));

app.get("/api/ping", (_req, res) => res.json({ ok: true }));

app.get("/api/me", requireAuth(), (req, res) => {
  const { userId } = getAuth(req);
  res.json({ userId });
});

// --- API Routes ---
app.use("/api/saveUser", saveUserInfo);
app.use("/api/saveQuestions", saveQuestionsToDb);
app.use("/api/getQuestions", getQuestionsFromDb);
app.use("/api/saveAnswers", saveAnswersToDb);
app.use("/api/evaluate", evaluateAnswers);
app.use("/api/saveModule", saveModule);
app.use("/api/savecareer", saveCareerPath);
app.use("/api/sendlearningcontent", sendLearningModules);
app.use("/api/getlevel", getUserDomain);
app.use("/api/chat", getChatHistory);

// --- Error handling ---
app.use((err, _req, res, _next) => {
  console.error("❌ Error:", err);
  if (err && err.statusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  res.status(500).json({ error: "Internal server error" });
});

// --- Create HTTP server & attach Socket.IO ---
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

 
chatSockets(io);

// --- Start server ---
const PORT = process.env.PORT || 4000;
server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:4000`)
);
