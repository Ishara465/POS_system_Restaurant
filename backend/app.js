require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/database.js");
const config = require("./config/config.js");
const globalErrorHandler = require("./middleware/globalErrorHandler.js");

//TODO:
const PORT = config.port;
connectDB();

//TODO Middleware
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
); //? Enable CORS for all routes
app.use(express.json()); //? parse incoming requests with JSON format
app.use(cookieParser());

//TODO Root Endpoint
app.get("/", (req, res) => {
  //TODO: Send a response to the client
  res.json({ message: "Hello from POS Server" });
});

//TODO: Other Endpoints
app.use("/api/user", require("./routes/userRoute.js"));
app.use("/api/order", require("./routes/orderRoute.js"));
app.use("/api/table", require("./routes/tableRoute.js"));

//TODO Global Error Handler
app.use(globalErrorHandler);

//TODO: Server
app.listen(PORT, () => {
  console.log(`☑️ 💞 Server is running on port ${PORT}`);
});
