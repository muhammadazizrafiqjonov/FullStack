import http from "http"
import fs from "fs"

function readfile(){
    let works = fs.readFileSync("database/works.json", "utf-8")
    works = JSON.parse(works)
    return works
}

function writeFile(data){
    fs.writeFileSync("database/works.json", JSON.stringify(data,null,4))
}

const app = http.createServer((req,res) => {
    if(req.method == "GET"){
        console.log(readfile())
        res.writeHead("200", "ok", {"Content-type" : "application/json"})
        res.end(JSON.stringify(readfile()))
    }
    else if(req.method == "POST"){
        let body = ""
        let notes = readfile()
        req.on("data", (chunk) => body += chunk)

        req.on("end" , () => {
            notes.push(JSON.parse(body))
            writeFile(notes)
        },
        res.end(JSON.stringify({statusCode : 201, message: "Successful"})))
    }
    else if(req.method == "DELETE"){
        let body = ""
        
        let notes = readfile()
        req.on("data" , (chunk) => {
            body += chunk
            let del_note = notes.filter(user => user.email == body.email)
            console.log(del_note)
            console.log(notes)
            console.log(body)
        })

        res.end()
    }
})



app.listen(4000, () => {console.log("Server is running....")})