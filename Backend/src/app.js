const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes");

const app = express();

// Middleware Part
app.use(express.json());
app.use(cors());

// Routes section
app.use("/api/test", testRoutes);

module.exports = app;