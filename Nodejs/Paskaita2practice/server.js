import express from "express";

const app = express();

const cars = ["BMW", "VW", "Porsche"];

app.get("/", (req, res) => {
    res.json(cars);
});

app.listen(3000, () => console.log("app listening on port 3000"));