import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "main.html");
})

app.listen(8080);