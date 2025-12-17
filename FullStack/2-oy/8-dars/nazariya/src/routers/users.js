import express from "express"
import UsersControllers from "../controllers/user.js"

const router = express.Router()

router
    .get("/all",UsersControllers.GET)

export default router