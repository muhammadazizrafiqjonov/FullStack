import express from "express"
import fs from "fs"
const PORT = 4000

const app = express()
app.use(express.json())

let users = fs.readFileSync("database/users.json", "utf-8")
users = JSON.parse(users)


//               U S E R S



app.get("/users/all", (req,res) => {
    res.send(users)
})

app.get("/users/single/:id", (req,res) => {
    const { id } = req.params
    const User = users.filter(user => user.id == id)
    res.send(User)
})

app.get("/users", (req,res) => {

    const {firstName,lastName, age} = req.query

    let User = users.filter(user => 
        firstName ? user.firstName == firstName : undefined ||
        lastName ? user.lastName == lastName : undefined ||
        age ? user.age == age : undefined
    )

    res.send(User)
})

app.post("/users", (req, res) => {
    const { id, firstName, lastName, age} = req.body

    let newUser = {
        id,
        firstName,
        lastName,
        age,
    }

    users.push(newUser)
    fs.writeFileSync("database/users.json", JSON.stringify(users, null, 4))
    res.status(201).json({
        status:201,
        message:"User added successfully"
    })

})

app.put("/users/:Id", (req,res) => {
    const { Id } = req.params
    const { id, firstName, lastName, age} = req.body
    
    const updateUser = users.find(user => user.id == Id)

    console.log(updateUser)

    id ? updateUser.id = id : updateUser.id
    firstName ? updateUser.firstName = firstName : updateUser.firstName 
    lastName ? updateUser.lastName = lastName : updateUser.lastName 
    age ? updateUser.age = age : updateUser.age
    
    fs.writeFileSync("database/users.json", JSON.stringify(users, null, 4))

    res.status(201).json({
        status:201,
        message:"User updated successfully"
    })

})

app.delete("/users/:id", (req,res) => {
    const { id } = req.params

    const delete_user = users.find(user => user.id == id)

    const new_Users =[]

    for (const user of users) {
        if(user != delete_user){
            new_Users.push(user)
        }        
    }

    fs.writeFileSync("database/users.json", JSON.stringify(new_Users, null, 4))


    res.status(200).json({
        status:200,
        message:"User deleted successfully"
    })
})



//                     P O S T S


let posts = fs.readFileSync("database/posts.json", "utf-8")
posts = JSON.parse(posts)


app.post("/posts", (req, res) => {
    const { id, title , description } = req.body

    let newPost = {
        id,
        title,
        description
    }

    posts.push(newPost)
    fs.writeFileSync("database/posts.json", JSON.stringify(posts, null, 4))
    res.status(201).json({
        status:201,
        message:"Post added successfully"
    })

})

app.get("/posts/all", (req,res) => {
    res.send(posts)
})

app.get("/posts/single/:id", (req,res) => {
    const { id } = req.params

    let single_post = posts.find(post => post.id ==id)

    res.send(single_post)
})

app.get("/posts", (req,res) => {

    const {title, description} = req.query

    let Post = posts.filter(post => 
        title ? post.title == title : undefined ||
        description ? post.description == description : undefined 
    )

    res.send(Post)
})

app.put("/posts/:Id", (req,res) => {
    const { Id } = req.params
    const { id, title, description} = req.body
    
    const updatePost = posts.find(post => post.id == Id)

    console.log(updatePost)

    id ? updatePost.id = id : updatePost.id
    title ? updatePost.title = title : updatePost.title 
    description ? updatePost.description = description : updatePost.description 
    
    fs.writeFileSync("database/posts.json", JSON.stringify(posts, null, 4))

    res.status(201).json({
        status:201,
        message:"Post updated successfully"
    })

})

app.delete("/posts/:id", (req,res) => {
    const { id } = req.params

    const delete_post = posts.find(post => post.id == id)

    const new_Posts =[]

    for (const post of posts) {
        if(post != delete_post){
            new_Posts.push(post)
        }        
    }

    fs.writeFileSync("database/posts.json", JSON.stringify(new_Posts, null, 4))


    res.status(200).json({
        status:200,
        message:"Post deleted successfully"
    })
})



app.listen(PORT, () => console.log("Server is running..."))