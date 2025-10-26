require("dotenv").config();
const OpenAI = require("openai");
const ChatMessage = require("../models/chatMessageSchema");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getChatMessages = async (userId, limit = 50) => {
  try {
    const messages = await ChatMessage.find({ userId })
      .sort({ timestamp: 1 })
      .limit(limit);

    return messages;
  } catch (error) {
    console.log(
      "Error fetching messages",
      error,
      "Error message: ",
      error.message
    );
    throw new Error("Failed to fetch chat history");
  }
};

const saveMessages = async (userId, role, content) => {
  try {
    const message = new ChatMessage({
      userId,
      role,
      content,
      timestamp: new Date(),
    });

    await message.save();
    return message;
  } catch (error) {
    console.log(
      "Error saving message to Database: ",
      error,
      "Error message:",
      error.message
    );
    throw new Error("Failed to save message.");
  }
};

const getRecentMessages = async (userId, limit = 10) => {
  try {
    const messages = await ChatMessage.find({ userId })
      .sort({ timestamp: -1 })
      .limit(limit);

    return messages.reverse();
  } catch (error) {
    console.log(
      "Error getting messages: ",
      error,
      "Error message: ",
      error.message
    );
    throw new Error("Failed to fetch recent messages");
  }
};

const generateSystemPrompt = (userDomain = null) => {
  return `You are an AI learning assistant helping students understand their courses and concepts${
    userDomain ? ` in the domain of ${userDomain}` : ""
  }. 
  
Your role is to:
- Answer questions about courses and learning materials clearly and concisely
- Clarify complex concepts with examples and analogies
- Guide students through exercises step-by-step without giving direct answers
- Encourage critical thinking and problem-solving
- Be supportive, patient, and motivating
- Keep responses focused and easy to understand
- Use a friendly, conversational tone

If you don't know something, be honest about it. Always prioritize helping the student learn rather than just providing answers.`;
};

const processMessageWithStreaming = async (
  userId,
  message,
  userDomain = null
) => {
  try {
    const recentMessages = await getRecentMessages(userId);

    const conversationHistory = recentMessages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    const systemPrompt = generateSystemPrompt(userDomain);

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
      stream: true,
    });

    return stream;
  } catch (error) {
    console.log(
      "Error processing message with streaming:",
      error,
      "Error message:",
      error.message
    );
    throw new Error("Failed to process message");
  }
};

module.exports = {
  getChatMessages,
  saveMessages,
  getRecentMessages,
  processMessageWithStreaming,
  generateSystemPrompt,
};
