const express = require("express");
const routerForError = express.Router();

routerForError.get("/error", (req, res, _next) => {
  const errorPart = new Error("Something is definately wrong");
  _next(errorPart);
});

module.exports = routerForError;
