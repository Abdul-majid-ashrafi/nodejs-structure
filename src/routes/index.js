import express from "express";
const router = express.Router();

import { postsController } from "../controllers";


router.get("/api/posts", postsController.get);
// http://localhost:5000/api/posts
router.post("/api/posts", postsController.create);
// http://localhost:5000/api/posts
router.put("/api/posts/:_id", postsController.update);
// http://localhost:5000/api/posts/_id:5f11c07def842a36cc12a31e
export default router;