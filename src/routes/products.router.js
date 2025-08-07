import { Router } from "express";

const router = Router();

import { getAllProducts, getProductById, searchProducts } from "../controllers/products.controller.js";

router.get("/products", getAllProducts);

router.get("/products/search", searchProducts);

router.get("/products/:id", getProductById);

export default router;
