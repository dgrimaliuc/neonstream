import { injectContent } from "./routes/root.js";

import express from "express";
const app = express();
app.use(express.json()); // Use express.json() middleware to parse JSON bodies

// Include route files

// Use routes
app.use("/inject", injectContent);
// Example specifying the port and starting the server
const port = process.env.PORT || 9060; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
