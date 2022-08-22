const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4 } = require("uuid"); // биболиотека для генерации ID
const app = express();

app.use(cors()); // позволяет избежать ошибку с работой API между локальными серверами
app.use(express.json()); // помогает серверу работать с пост запросами
app.use(bodyParser.urlencoded({ extended: false }));

let CONTACTS = [{ id: "0", name: "Ali", text: "9 888 777 66 55", marked: false }];

// GET
app.get("/api", (req, res) => {
    res.json(CONTACTS);
});

// POST
app.post("/api", (req, res) => {
    const contact = { ...req.body, id: v4() };
    CONTACTS.push(contact);
    res.status(201).json(req.body); //201 - элемент создан
});

// DELETE
app.delete("/api/:id", (req, res) => {
    CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);
    res.status(200).json({ message: "Object has deleted" });
});

// PUT

app.listen(5000, function () {
    console.log("Server started on port 5000.");
});
