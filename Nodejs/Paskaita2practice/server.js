import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const carBrands = ["BMW", "VW", "Porsche"];

app.get("/", (req, res) => {
    res.json(carBrands);
})

app.listen(3000, () => console.log("app listening on port 3000"));