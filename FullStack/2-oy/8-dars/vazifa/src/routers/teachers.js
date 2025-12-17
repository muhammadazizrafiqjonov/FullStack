import express from "express"
import  TeachersControllers  from "../controllers/teachers.js"
const router = express.Router()

router
    .get("/all", TeachersControllers.GET)
    .post("/create",TeachersControllers.POST)
    .put("/update/:id", TeachersControllers.PUT)
    .delete("/delete/:id", TeachersControllers.DELETE)


export default router