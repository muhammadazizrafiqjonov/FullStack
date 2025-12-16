//  1-masala

// const map = new Map([["a", 1], ["b", 2], ["c", 3]])
// let arr = []

// for (const el of map) {

//     arr.push(el)

// }

// arr = arr.flat()

// console.log(arr)


//  2 -masala

// let howMuch = function(arr){
//     let map = new Map()
//     let count = 0

//     for (const el of arr) {


//         if (map.has(el)){

//             count += 1    
//         }
//         map.set(el, count)
//     }

// return map
// }

// let str = "apple banana apple orange banana apple"
// let arr = str.split(" ")

// console.log(howMuch(arr))

//  3 - masala

// let matn = "hello world hello chatgpt world"
// let arr = matn.split(" ")
// let UniqueWord = new Set()

// for (const el of arr) {

//     if(!UniqueWord.has(el)){
//         UniqueWord.add(el)
//     }

// }

// console.log(UniqueWord)

//  4 - masala


// let birthDate = "2000-05-12"
// let birthDate1 = birthDate.split("-")
// let yearsOld = [] // Yoshi , oyi , kuni
// let Date_now = new Date()
// let Date_now1 = [Date_now.getFullYear(), Date_now.getMonth()+1, Date_now.getDate()]


// for (let i = 0; i < birthDate1.length; i++){
//     yearsOld[i] = Date_now1[i] - birthDate1[i]
// }

// console.log(yearsOld.join("-"))

//  5 -masala

// let Month_days = function (a) {

//     switch (a) {
//         case 1: {
//             return 31
//         }
//         case 2: {
//             return 28
//         }
//         case 3: {
//             return 31
//         }
//         case 4: {
//             return 30
//         }
//         case 5: {
//             return 31
//         }
//         case 6: {
//             return 30
//         }
//         case 7: {
//             return 31
//         }
//         case 8: {
//             return 31
//         }
//         case 9: {
//             return 30
//         }
//         case 10: {
//             return 31
//         }
//         case 11: {
//             return 30
//         }
//         case 12: {
//             return 31
//         }
//     }

// }


// let sana = "2025-01-01"
// let arr_sana = sana.split("-")
// let n = 100
// let new_sana = []

// for (let i = 0; i < arr_sana.length; i++){
//     if (i == arr_sana.length - 1) {
//         new_sana.push(Number(arr_sana[i]) + n)
//     }
//     else {
//     new_sana.push(Number(arr_sana[i]))
//     }
// }
// while(true) {

//     if(new_sana[1] > 12) {
//         new_sana[0] += 1
//         new_sana[1] -= 12
//     }
//     else if (new_sana[2] > Month_days(new_sana[1])){
//         new_sana[2] -= Month_days(new_sana[1])
//         new_sana[1] += 1
//     }    
//     else {
//         break
//     }

// }

// console.log(new_sana)


//  6 - masala


// let sana1 = "2006-10-22"
// let sana2 = "2025-11-21"

// let arr_sana1 = sana1.split("-")
// let arr_sana2 = sana2.split("-")

// let period = 0

// let int_value = []

// for (let i = 0; i < arr_sana1.length; i++) {
//     int_value.push(Number(arr_sana2[i] - arr_sana1[i]))
// }
// period = int_value[0] * 365
// let i = 0, j = 0

// if (Number(arr_sana1[1]) < Number(arr_sana2[1])) {
//     while ((Number(arr_sana1[1]) + i) < Number(arr_sana2[1])) {

//         period += Month_days(Number(arr_sana1[1]) + i)
//         i += 1

//     }
// }
// else {
//     while ((Number(arr_sana2[1]) + j) < Number(arr_sana1[1])) {

//         period -= Month_days(Number(arr_sana2[1]) + j)
//         j += 1

//     }

// }

// period += int_value[2]

// console.log(period)



