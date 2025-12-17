import express from "express"
import  StudentsControllers  from "../controllers/students.js"
const router = express.Router()

router
    .get("/all", StudentsControllers.GET)
    .post("/create",StudentsControllers.POST)
    .put("/update/:id", StudentsControllers.PUT)
    .delete("/delete/:id", StudentsControllers.DELETE)


export default router