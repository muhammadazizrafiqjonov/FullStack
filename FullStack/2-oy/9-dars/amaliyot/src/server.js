import moviesRouters from "./routers/index.js"
import express from "express"

const PORT = 4000

const server = express()
server.use("/movies", moviesRouters)

server.listen(PORT, () => console.log("Server is running..."))