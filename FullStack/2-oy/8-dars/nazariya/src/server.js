import express from "express";

import { UsersRouters, PostsRouters } from "./routers/index.js";

const PORT = 4000;

const server = express();
server.use("/users", UsersRouters);
server.use("/posts", PostsRouters);

server.listen(PORT, () => console.log("Server is running..."));
