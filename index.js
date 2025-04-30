// require("dotenv").config();
//import { Router } from "express";
const express = require("express");

const app = express();

const cors = require("cors");

// Port
const port = process.env.PORT || 4000
// db connection
require(`./db/connection`);

app.get("/", (req,res) => {
    res.send("hello!")
});

// Require routes
const groupRoutes = require(`./routes/groupRoute`);
const noteRoutes = require(`./routes/notesRoute`);

// MiddleWares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/group",groupRoutes);
app.use("/api/notes", noteRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at PORT: ${port}`);
});