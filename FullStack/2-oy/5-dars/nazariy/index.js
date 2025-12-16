import http from "http"
import fs from "fs"

let users = fs.readFileSync("database/users.json", "utf-8")
users = JSON.parse(users)

const app = http.createServer((req, res) => {
    if(req.method == "GET" && req.url == "/users"){
        res.writeHead(200, "ok", {"Content-type" : "application/json"})
        res.end(JSON.stringify(users))
    }
    
})


app.listen(4000, () => console.log("Server is running...."))