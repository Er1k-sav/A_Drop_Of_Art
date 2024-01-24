import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "main.html");
    res.type("html");
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "style.css");
    res.type("css");
});

app.listen(8080);