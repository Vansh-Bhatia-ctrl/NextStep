const {
  getChatMessages,
  saveMessages,
  processMessageWithStreaming,
} = require("../controllers/chatController");
const socketAuthMiddleware = require("../middlewares/socketMiddleware");

module.exports = (io) => {
  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.userId}`);

    socket.join(socket.userId);

    socket.on("get_history", async () => {
      try {
        const messages = await getChatMessages(socket.userId);
        socket.emit("chat_history", { messages });
      } catch (error) {
        console.error(
          "Error in get_history:",
          error,
          "Error message: ",
          error.message
        );
        socket.emit("error", { message: error.message });
      }
    });

    socket.on("send_message", async (data) => {
      try {
        const { message, userDomain } = data;

        if (!message || message.trim() === "") {
          socket.emit("error", { message: "User message is required." });
          return;
        }

        const userMessage = await saveMessages(socket.userId, "user", message);

        socket.emit("message_received", {
          role: "user",
          content: message,
          timestamp: userMessage.timestamp,
          _id: userMessage._id,
        });

        socket.emit("assistant_typing", { typing: true });

        const stream = await processMessageWithStreaming(
          socket.userId,
          message,
          userDomain
        );

        let fullResponse = "";
        let firstChunk = true;

        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || "";

          if (content) {
            fullResponse += content;
            socket.emit("assistant_response_stream", {
              content: content,
              isFirst: firstChunk,
              isDone: false,
            });
            firstChunk = false;
          }
        }

        socket.emit("assistant_typing", { typing: false });

        const assistantMessage = await saveMessages(
          socket.userId,
          "assistant",
          fullResponse
        );

        socket.emit("assistant_response_complete", {
          role: "assistant",
          content: fullResponse,
          timestamp: assistantMessage.timestamp,
          _id: assistantMessage._id,
        });
      } catch (error) {
        console.error(
          "Error in send_message:",
          error,
          "Error message: ",
          error.message
        );
        socket.emit("assistant_typing", { typing: false });
        socket.emit("error", {
          message: "Failed to process message. Please try again.",
        });
      }
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  });
};
