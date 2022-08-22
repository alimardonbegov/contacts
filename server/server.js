const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        users: [
            { name: "Aaa", age: 111 },
            { name: "Bbb", age: 222 },
            { name: "Ccc", age: 333 },
        ],
    });
});

app.listen(5000, function () {
    console.log("Server started on port 5000.");
});
