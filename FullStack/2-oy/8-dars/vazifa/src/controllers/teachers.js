import fs from "fs"
import path  from "path"
import filesystem from "../utilits/read_and_write.js"

let teachers = filesystem.read("teachers")

const GET = (req, res) => {
    res.send(teachers)
}

const POST = (req,res) => {
    const { fullname, age, email, phone, password } = req.body

    if(!fullname){
        return res.send("fullname bo'sh bo'lmasligi lozim !!!")
    }
    else if(!age){
        return res.send("age bo'sh bo'lmasligi lozim !!!")
    }
    else if(!email){
        return res.send("email bo'sh bo'lmasligi lozim !!!")
    }
    else if(!phone){
        return res.send("phone bo'sh bo'lmasligi lozim !!!")
    }
    else if(!password){
        return res.send("password bo'sh bo'lmasligi lozim !!!")
    }

    const exist_Teacher = teachers.find(s => s.email == email)

    if (exist_Teacher){
        return res.send("Bunday emailga ega foydalanuvchi mavjud !!!")
    }

    let New_Teacher = {
        id : teachers.length ? teachers[teachers.length - 1].id + 1 : 1,
        fullname,
        age,
        email,
        phone,
        password
    }

    teachers.push(New_Teacher)

    filesystem.write("teachers", teachers)

    res.status(201).json({
        status : 201,
        message : "New Teacher added successfully"
    })
}

const PUT = (req,res) => {
    const { id } = req.params
    const { fullname, age, email, phone, password } = req.body

    let Updated_Teacher = teachers.find(s => s.id == id)

    if(!Updated_Teacher){
        return res.send("Bunday id ga ega foydalanuvchi mavjud emas !!!")
    }

    fullname ? Updated_Teacher.fullname = fullname : Updated_Teacher.fullname
    age ? Updated_Teacher.age = age : Updated_Teacher.age
    email ? Updated_Teacher.email = email : Updated_Teacher.email
    phone ? Updated_Teacher.phone = phone : Updated_Teacher.phone
    password ? Updated_Teacher.password = password : Updated_Teacher.password

    filesystem.write("teachers", teachers)

    res.status(200).json({
        status : 200,
        message : "Teacher updated successfully"
    })
}

const DELETE = (req,res) => {
    const { id } = req.params

    let Exists_Teacher = teachers.find(s => s.id == id)

    if(!Exists_Teacher){
        return res.send("Bunday id ga ega foydalanuvchi mavjud emas !!!")
    }

    teachers.splice(id-1,1)

    filesystem.write("teachers", teachers)

    res.status(200).json({
        status : 200,
        message : "Teacher deleted successfully"
    })

}



export default {
    GET,
    POST,
    PUT,
    DELETE
};