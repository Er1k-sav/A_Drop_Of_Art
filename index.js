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

app.listen(8080);