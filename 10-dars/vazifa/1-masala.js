
class Student {


    constructor(id, name, age, group) {
        this.students = []
        this.id = id
        this.name = name
        this.age = age
        this.group = group 
        this.students.push([this.id,this.name,this.age,this.group])
        if (id && name && age && group) {
            this.arr = {
                id : this.id,
                name : this.name,
                age : this.age,
                group : this.group
            }
            this.students.push(this.arr)
        }

    }

    set create_student([id,name,age,group]) {
        let new_student = [
            this.id = id, 
            this.name = name,
            this.age = age,
            this.group = group
        ]

        if (new_student[0] == this.students[0].id) {
            console.log("Bunday id ga ega foydalanuvchi mavjud")
        }
        else {
            this.students.push({
                id : this.id,
                name : this.name,
                age : this.age,
                group : this.group

        })
        }
    }


    update_id(current_id, new_id) {
        if (typeof(current_id) == typeof(1) && typeof(new_id) == typeof(1)){
            for (let i = 0; i < this.students.length; i++){
                if(current_id == this.students[i].id){
                    for (let i = 0; i < this.students.length; i++){
                        if (new_id == this.students[i].id){
                            console.log("Bunday idga ega foydalanuvchi  mavjud")
                            return
                        }
                    }
                    this.students[i].id = new_id
                    console.log("Muvaffaqiyatli o'zgardi")
                    return
                 }
            }
            console.log("Bunday id mavjud emas")
        }
        else {
            console.log("Id faqat son bolishi mumkin")
        }
    }

    delete_user(current_id) {
        if (typeof(current_id) == typeof(1)){
            for (let i = 0; i < this.students.length; i++){
                if(current_id == this.students[i].id){
                    this.students.splice(i,1)
                    console.log("Muvaffaqiyatli o'chirildi")
                    return
                 }
            }
            console.log("Bunday id mavjud emas")
        }
        else {
            console.log("Id faqat son bolishi mumkin")
        }
    }



    get getAll() {
            
        this.students.shift()
        if (this.students[0] == null) {
            this.students.shift()
        }
        return this.students
    }
    getByID(id) {
        if (typeof(id) == typeof(1)) {
            for (let i = 0; i < this.students.length; i++){
                if (id == this.students[i].id){
                    return this.students[i]
                }
            }
            console.log("Bunday id ga ega student mavjud emas")
        }
        else {
            console.log("Id faqat son bolishi mumkin")
        }
    }

    sortByAge() {
        for (let i = 0; i < this.students.length; i++){
            for (let j = 0; j < this.students.length; j++){
                let temp
                if(this.students[i].age < this.students[j].age){
                    temp = this.students[i].age
                    this.students[i].age = this.students[j].age
                    this.students[j].age = temp
                }
            }
        }
    }
}

const student = new Student(1,"Muhammadaziz", 19, "Auotdesk")
let i = 5
while(i >= 2){
student.create_student = [i,"Muhammadaziz", i + 18, "Auotdesk"],
i-=1
}

// student.update_id(4,4) 
// student.delete_user(3)
// student.sortByAge()

// console.log(student.getByID(2))
console.log(student.getAll)