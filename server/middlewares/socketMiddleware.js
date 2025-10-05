const socketAuthMiddleware = async (socket, next) => {
  try {
    const userId = socket.handshake.auth.userId;

    if (!userId) {
      return next(
        new Error("User is not authenticated, please login or sign-up")
      );
    }

    socket.userId = userId;
    next();
  } catch (error) {
    console.error(
      "Socket authentication error:",
      error,
      "Error message:",
      error.message
    );
    next(new Error("Authentication failed"));
  }
};

module.exports = socketAuthMiddleware;
