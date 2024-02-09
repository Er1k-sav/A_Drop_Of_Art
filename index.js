import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/main.html");
    res.type("html");
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
    res.type("css");
});

app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + "/script.js");
    res.type("application/javascript");
});

app.get("/diatomea.jpg", (req, res) => {
    res.sendFile(__dirname + "/immagini/diatomea.jpg");
    res.type("image/jpg");
})

app.get("/tardigrado.jpg", (req, res) => {
    res.sendFile(__dirname + "/immagini/tardigrado.jpg");
    res.type("image/jpg");
})

app.get("/locandinarot.jpg", (req, res) => {
    res.sendFile(__dirname + "/immagini/locandinarot.jpg");
    res.type("image/jpg");
})
app.listen(8080);