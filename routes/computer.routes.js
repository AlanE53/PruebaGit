import { Router } from "express";

import { getComputer, addComputer, updateComputer, deleteComputer } from "../controllers/computer.controller.js";

const router = Router();

router.get("/", getComputer);
router.post('/', addComputer);
router.put('/', updateComputer);
router.delete('/', deleteComputer);


export default router;