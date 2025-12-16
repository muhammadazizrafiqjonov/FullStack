// function juft(a){
//     if (a % 2 == 0) {
//         return "Juft"
//     }
// }
// function toq(a){
//     if (a % 2 != 0) {
//         return "Toq"
//     }
// }

// let juft = function(a){
//     if (a % 2 == 0) {
//         return "Juft"
//     }
// }
// let toq = function(a){
//     if (a % 2 != 0) {
//         return "Toq"
//     }
// }


// const juft = (a) => {
//         if (a % 2 == 0) {
//         return "Juft"
//     }
// }
// const toq = (a) => {
//     if (a % 2 != 0) {
//         return "Toq"
//     }
// }


// let son = 3

// console.log(juft(son))
// console.log(toq(son))


// function sum(a){
//     let count = 0
//     while(a){
//         count = count + a % 10
//         a = (a - a % 10) / 10
//     }

//     return count

// }

// let son = 15464


// console.log(sum(son))


function factorial(son) {    
   
    if (son == 1) {
        return son
    }   

    return son * factorial(son - 1)
}

let son = 17;

console.log(factorial(son))


