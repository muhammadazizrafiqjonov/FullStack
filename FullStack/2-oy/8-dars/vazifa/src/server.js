import express from "express"
import { StudentsRouters, TeachersRouters } from "./routers/index.js"

const PORT = 4000
const  server = express()
server.use(express.json())

server.use("/students", StudentsRouters)
server.use("/teachers", TeachersRouters)

server.listen(PORT, () => console.log("Server is running..."))

