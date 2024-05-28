import express from "express";
import { addCar, deleteCarById, getCarById, getCars } from "./controllers.js";

const router = express.Router();

router.get("/cars", getCars);

router.get("/cars/:id", getCarById);

router.post("/cars", addCar);

router.delete("/cars/:id", deleteCarById);

export default router;