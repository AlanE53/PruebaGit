import { Router } from "express";

import { getIngredient, addIngredient, updateIngredient, deleteIngredient } from "../controllers/ingredient.controller.js";

const router = Router();

router.get("/", getIngredient);
router.post('/', addIngredient);
router.put('/', updateIngredient);
router.delete('/', deleteIngredient);


export default router;