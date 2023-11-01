import { Router } from "express";

import { getMenus, addMenu, updateMenu, deleteMenu } from "../controllers/menu.controller.js";

const router = Router();

router.get("/", getMenus);
router.post('/', addMenu);
router.put('/', updateMenu);
router.delete('/', deleteMenu);


export default router;