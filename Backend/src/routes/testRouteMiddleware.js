const express = require("express");
const routerForError = express.Router();


routerForError.get("/error", (req,res, next) => {
    const errorPart = new Error("Something is definately wrong");
    next(errorPart);
})

module.exports = routerForError;