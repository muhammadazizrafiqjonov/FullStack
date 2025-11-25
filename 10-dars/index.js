// class Person {

//     constructor(name) {
//         this.name = name
//     }

//     get getName() {
//         return this.name
//     }

//     set setName(NewName) {
//         let type = typeof (NewName)
//         if (type != "string") {
//             this.name
//         }
//         if (NewName.length > 3 && NewName.length < 20) {
//             this.name = NewName
//         }
//         else {
//             this.name
//         }

//     }

// }

// const user = new Person("Ali")

// user.setName = "Abror"

// console.log(user.getName)



// class RGB {

//     constructor(Red,Green,Blue){
//         this.Red = (Red <= 255) ? Red : 0
//         this.Green= (Green <= 255) ? Green : 0
//         this.Blue = (Blue <= 255) ? Blue : 0
//     }

//     get getColors(){
//         return this.Red, this.Green, this.Blue
//     }

// set setColors(red,green,blue) {

//     if(typeof(red) == "number" && typeof(green) == "number" && typeof(blue) == "number"){
//         this.ed = red <= 255 ? red : 0
//         this.green= green <= 255 ? green : 0
//         this.blue = blue <= 255 ? blue : 0  
//     }

// }
// set red(red){
//     if(typeof(red) == "number"){
//         this.ed = red <= 255 ? red : 0
//     }
// }
// set green(green){
//     if(typeof(green) == "number"){
//         this.ed = green <= 255 ? green : 0
//     }
// }
// set blue(blue){
//     if(typeof(blue) == "number"){
//         this.ed = blue <= 255 ? blue : 0
//     }
// }


// }


// let color = new RGB(124,50,270)

// console.log(color.getColors)











//  1-masala



class rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    set setwidth(new_width) {
        this.width = new_width
    }
    set setheight(new_height) {
        this.height = new_height
    }

    get get_perimeter() {
        return (this.width + this.height) * 2
    }
    get get_area() {
        return this.width * this.height
    }


}

let tortburchak = new rectangle(10, 11)

tortburchak.setwidth = 15
tortburchak.setheight = 20

console.log(tortburchak.get_area, tortburchak.get_perimeter)


