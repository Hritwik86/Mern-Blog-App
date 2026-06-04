const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const routerForError = require("./routes/testRouteMiddleware");

const app = express();

// Middleware Part
app.use(express.json());
app.use(cors());

// Routes section
app.use("/api/test", testRoutes);
app.use("/api/errortest", routerForError);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;