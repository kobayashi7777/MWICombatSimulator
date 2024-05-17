import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
const port = 5000;

app.use(cors());
app.use(express.static(__dirname + "/static"));

app.get("/mwisim.github.io", (req, res) => {
    console.log("GET: " + req.originalUrl);
    res.sendFile(__dirname + "/index.html");
});

app.get("/readme", (req, res) => {
    console.log("GET: " + req.originalUrl);
    res.sendFile(__dirname + "/readme.html");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
