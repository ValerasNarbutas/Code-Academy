import express from "express";
import { addItem, deleteItemById, getItems } from "./controllers.js";

const router = express.Router();

router.get("/items", getItems);

router.post("/items", addItem);

router.delete("/items/:id", deleteItemById);

export default router;