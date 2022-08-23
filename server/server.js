const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid"); // биболиотека для генерации ID
const app = express();

app.use(cors()); // позволяет избежать ошибку с работой API между локальными серверами
app.use(express.json()); // помогает серверу работать с пост запросами

const port = 5000;

let CONTACTS = [{ id: "0", name: "Ali", text: "9 888 777 66 55", marked: false }];

// GET
app.get("/api", (req, res) => {
    res.json(CONTACTS);
});

// POST
app.post("/api", (req, res) => {
    const contact = { ...req.body, id: v4() };
    CONTACTS.push(contact);
    res.status(201).json(contact);
});

// DELETE
app.delete("/api/:id", (req, res) => {
    CONTACTS = CONTACTS.filter((c) => c.id !== req.params.id);
    res.json({ message: "Object has deleted" });
});

// PUT
app.put("/api/:id", (req, res) => {
    const currentIndex = CONTACTS.findIndex((c) => c.id === req.params.id);
    CONTACTS[currentIndex] = req.body;
    res.json(CONTACTS[currentIndex]);
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});
