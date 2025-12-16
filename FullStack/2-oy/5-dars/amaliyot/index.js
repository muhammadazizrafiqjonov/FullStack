import fs from "fs"
const date = new Date()


const data = fs.readFileSync("database/users.json", "utf-8")
const users = JSON.parse(data)
const data2 = fs.readFileSync("database/logs.json", "utf-8")
const errors = JSON.parse(data2)

function newUser(ismi , yosh){
   
    const newUser = {
        id : Math.random().toString(36).substring(2, 10),
        name : ismi,
        age : yosh,
        createdAt : date.toISOString()
    }

    users.push(newUser)
}

// function deleteUser(id){

//     const index = 

// }





newUser("vali", 20)

fs.writeFileSync("database/users.json", JSON.stringify(users, null, 4))


