"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bot, Loader2, Send, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth, useUser } from "@clerk/nextjs";
import { io } from "socket.io-client";

const AiChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessages, setInputMessages] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const messageRef = useRef(null);
  const socketRef = useRef(null);
  const { userId } = useAuth();
  const { user } = useUser();

  const scrollToBottom = () => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  useEffect(() => {
    if (!userId) return;

    const socket = io(`${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}`, {
      auth: {
        userId: userId,
      },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to server.");
      setIsConnected(true);
      socket.emit("get_history");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected.");
      setIsConnected(false);
    });

    socket.on("chat_history", (data) => {
      setMessages(data.messages || []);
      setIsLoadingHistory(false);
    });

    socket.on("message_received", (data) => {});

    socket.on("assistant_typing", (data) => {
      setIsTyping(data.typing);
      if (data.typing) {
        setStreamingMessage("");
      }
    });

    socket.on("assistant_response_stream", (data) => {
      if (data.isFirst) {
        setStreamingMessage(data.content);
      } else {
        setStreamingMessage((prev) => prev + data.content);
      }
    });

    socket.on("assistant_response_complete", (data) => {
      setMessages((prev) => [...prev, data]);
      setStreamingMessage("");
      setIsTyping(false);
    });

    socket.on("error", (data) => {
      console.error("Socket error:", data.message);
      alert(data.message);
      setIsTyping(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const handleSendMessages = (e) => {
    e.preventDefault();

    if (!inputMessages.trim() || isTyping || !isConnected) return;

    const userMessage = {
      role: "user",
      content: inputMessages,
      timestamp: new Date(),
      _id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    socketRef.current.emit("send_message", {
      message: inputMessages,
    });

    setInputMessages("");
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (isLoadingHistory) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-custom-gray-300 p-4">
          <div className="flex items-center gap-2 lg:max-w-7xl lg:mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot color="#fff" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold">AI Assistant</p>
              <p className="text-slate-300 text-sm">
                {isConnected ? "Always here to help" : "Connecting..."}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-full mt-4 p-3 lg:max-w-7xl lg:mx-auto overflow-y-auto">
          {messages.length === 0 && !streamingMessage ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl mb-4">
                <Bot color="#fff" size={32} />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                Start a conversation!
              </p>
              <p className="text-slate-400 text-sm max-w-md">
                Ask me anything about your courses, concepts, or exercises. I'm
                here to help you learn!
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg._id || index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-2 mb-5 ${
                    msg.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                      <Bot color="#fff" />
                    </div>
                  )}
                  <div
                    className={`flex flex-col ${
                      msg.role === "user" ? "items-end" : ""
                    }`}
                  >
                    <p
                      className={`text-white text-sm rounded-xl p-3 max-w-2xl ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-blue-600 to-purple-600"
                          : "bg-transparent border border-slate-600"
                      }`}
                    >
                      {msg.content}
                    </p>
                    <p className="text-slate-400 text-sm font-light mt-2">
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>

                  {msg.role === "user" && (
                    <div className="bg-custom-gray-400 p-2 rounded-xl flex-shrink-0">
                      <User color="#fff" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {streamingMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-2 mb-5"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl flex-shrink-0">
                <Bot color="#fff" />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-sm bg-transparent border border-slate-600 rounded-xl p-3 max-w-2xl">
                  {streamingMessage}
                  <span className="inline-block w-1 h-4 ml-1 bg-blue-500 animate-pulse"></span>
                </p>
              </div>
            </motion.div>
          )}

          {isTyping && !streamingMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-2 mb-5"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                <Bot color="#fff" />
              </div>
              <div className="bg-transparent border border-slate-600 rounded-xl p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messageRef} />
        </div>

        <div className="p-4 lg:max-w-7xl lg:mx-auto">
          <form onSubmit={handleSendMessages}>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
              <div className="flex gap-3">
                <input
                  value={inputMessages}
                  onChange={(e) => setInputMessages(e.target.value)}
                  type="text"
                  placeholder="Ask your doubt here..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-500 text-white"
                  disabled={isTyping || !isConnected}
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20"
                  disabled={isTyping || !inputMessages.trim() || !isConnected}
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default AiChatSection;
