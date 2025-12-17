import express from "express"
import PostsControllers from "../controllers/posts.js"

const router = express.Router()

router
    .get("/all", PostsControllers.GET)

export default router