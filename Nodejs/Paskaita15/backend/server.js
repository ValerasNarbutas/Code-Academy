import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router.js";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));