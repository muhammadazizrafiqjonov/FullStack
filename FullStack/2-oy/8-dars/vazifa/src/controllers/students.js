import filesystem from "../utilits/read_and_write.js"

let students = filesystem.read("students")

const GET = (req, res) => {
    res.send(students)
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

    const exist_Student = students.find(s => s.email == email)

    if (exist_Student){
        return res.send("Bunday emailga ega foydalanuvchi mavjud !!!")
    }

    let New_Student = {
        id : students.length ? students[students.length - 1].id + 1 : 1,
        fullname,
        age,
        email,
        phone,
        password
    }

    students.push(New_Student)
    filesystem.write("students",students)

    res.status(201).json({
        status : 201,
        message : "New Student added successfully"
    })
}

const PUT = (req,res) => {
    const { id } = req.params
    const { fullname, age, email, phone, password } = req.body

    let Updated_Student = students.find(s => s.id == id)

    if(!Updated_Student){
        return res.send("Bunday id ga ega foydalanuvchi mavjud emas !!!")
    }

    fullname ? Updated_Student.fullname = fullname : Updated_Student.fullname
    age ? Updated_Student.age = age : Updated_Student.age
    email ? Updated_Student.email = email : Updated_Student.email
    phone ? Updated_Student.phone = phone : Updated_Student.phone
    password ? Updated_Student.password = password : Updated_Student.password

    filesystem.write("students",students)

    res.status(200).json({
        status : 200,
        message : "Student updated successfully"
    })
}

const DELETE = (req,res) => {
    const { id } = req.params

    let Exists_Student = students.find(s => s.id == id)

    if(!Exists_Student){
        return res.send("Bunday id ga ega foydalanuvchi mavjud emas !!!")
    }

    students.splice(id-1,1)

    filesystem.write("students",students)

    res.status(200).json({
        status : 200,
        message : "Student deleted successfully"
    })

}



export default {
    GET,
    POST,
    PUT,
    DELETE
};