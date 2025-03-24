require("dotenv").config();
const express = require("express");
const app = express();
const createHttpError = require("http-errors");

const connectDB = require("./config/database.js");
const config = require("./config/config.js");
const globalErrorHandler = require("./middleware/globalErrorHandler.js");

//TODO:
const PORT = config.port;
connectDB();

//TODO Root Endpoint
app.get("/", (req, res) => {
  //TODO: Send a response to the client
  res.json({ message: "Hello from POS Server" });
});

//TODO Global Error Handler
app.use(globalErrorHandler);

//TODO: Server
app.listen(PORT, () => {
  console.log(`☑️ 💞 Server is running on port ${PORT}`);
});
