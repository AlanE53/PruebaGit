import { Router } from "express";

import { getPizzas, addPizza, updatePizza, deletePizza } from "../controllers/pizza.controller.js";

const router = Router();

router.get("/", getPizzas);
router.post('/', addPizza);
router.put('/', updatePizza);
router.delete('/', deletePizza);


export default router;