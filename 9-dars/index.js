// let obj = {
//     name : "Ali",
//     regions : [
//         {
//             districts : {

//             }

//         },
//         {
//             districts : [
//                                 {
//                     names: [
//                         {
//                             id : 1,
//                             name:"Shodlik"
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

// let {regions : [,{districts:[{names : [{name}]}]}]} = obj

// console.log(name)



//  Hozirgi vaqt

// setInterval(()  => {
//     let sana = new Date()
//     console.clear()
//     console.log(`${sana.getFullYear()} : ${sana.getMonth() + 1} : ${sana.getDate()}   ${sana.getHours()} : ${sana.getMinutes()} : ${sana.getSeconds()} : ${sana.getMilliseconds()}`)

// },100)


//  Stringni raqamlar bo'yicha saralash


// let str1 = "4of Fo1r pe6ople g3ood th5e the2"
// let str2 = ""
// let sumArr = []
// let arr = str1.split(" ") 
// let temp


// for (let i = 0; i < arr.length; i++) {
//     let newArr = arr[i].split("")
//     sumArr.push(newArr)
// }

// for (let i = 0; i < arr.length; i ++) {
//     for (let j = i+1; j <arr.length; j++) {
//         let son1 = sumArr[i].filter(el => !isNaN(el))
//         let son2 = sumArr[j].filter(el => !isNaN(el))
//         if (son1 > son2) {
//             temp = sumArr[i]
//             sumArr[i] = sumArr[j]
//             sumArr[j] = temp
//         }
//     }
// }

// for (let i = 0; i < sumArr.length; i++) {
//     str2 = str2 + " " + sumArr[i].join("")
// }

// console.log(str2)
 
