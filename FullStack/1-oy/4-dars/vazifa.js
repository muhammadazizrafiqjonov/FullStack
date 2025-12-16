//  1-misol

// let son = 1525, output, toq, count

// if (String(son).length % 2 != 0) {
//     count = true
// }
// else {
//     count = false
//     console.log("No")
//     console.log("Raqamlarining yig'indisi toq emas!")
//     return
// }

// while(son){
//     toq = son % 10
//     son = (son - son % 10) / 10
//     if (toq % 2 == 0){
//         console.log("No")
//         console.log("Raqamlaridan qaysidir biri toq emas!")
//         return
//     }
// }

// console.log("Yes")

//  2-misol

// let talaba = 3, niqob = 14

// console.log(niqob % talaba)

//  3-misol

// let A_metr = 34, B_metr = 45

// console.log(B_metr - A_metr + 1)

//  4 -misol

// let chipta  = 8.3

// if (!Number.isInteger(chipta)){
//     console.log("Bu butun son emas")
//     return
// }

// if (chipta == 1 || chipta == 10) {
//     console.log("VIP")
// }
// else if (chipta >= 2 && chipta <= 7) {
//     console.log("ECONOM")
// }
// else if (chipta == 8 || chipta == 9) {
//     console.log("BIZNES")
// }
// else {
//     console.log("Notog'ri raqam")
// }

//  5-misol

// let son = 165, count = 0

// if (son < 100 || son > 999) {
//     console.log("Notog'ri son kiritildi")
//     return
// }

// for (let i = 100; i < son; i++){
//     if ((i + i % 100) == son){
//         console.log(`${i} `)
//         count += 1
//     }
// }

// if (count == 0) {
//     console.log("mavjud emas")
// }