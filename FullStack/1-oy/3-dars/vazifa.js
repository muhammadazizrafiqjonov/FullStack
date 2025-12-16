
//  4 - masala

// let son = 14, count = 0

// while(son > 0) {
//     if (son % 5 == 0){
//         count += son / 5
//         son = 0
//     }
//     else {
//         son -= 3
//         if (son < 0){
//             count = -1
//         }
//         else {
//         count +=1
//         }
//     }
// }

// console.log(count)


//  5 - masala

// let son = 100001, son_dast_3, son_oxr_3, sum1 = 0, sum2 = 0

// if (son / 1000000 < 1 && son / 100000 >=1){

//     son_dast_3 = (son - son % 1000) / 1000

//     while(son_dast_3){
//         sum1 = son_dast_3 % 10 + sum1
//         son_dast_3 = (son_dast_3 - son_dast_3 % 10)/10
//     }

//     son_oxr_3 = son % 1000

//     while(son_oxr_3){
//         sum2 = son_oxr_3 % 10 + sum2
//         son_oxr_3 = (son_oxr_3 - son_oxr_3 % 10)/10
//     }

//     if (sum1 == sum2){
//         console.log("YES")
//     }
//     else {
//         console.log("NO")
//     }
// }
// else {
//     console.log("Bu son 6 xonali emas")
// }

//  2- yechim , birinchi bolib biror bir sum degan ozgaruvchiga berilgan 6 xonali sonning oxirgi 3 ta raqamini qoshib boramiz va keyingi 3 ta 
//  raqamini ayiramiz va sum 0 ga teng bolsa demak chipta omadli boladi.


//  6 - masala


// let son = 10, count = 0

// while(son > 1){

//     if (son % 2 == 0){
//         son = son / 2
//         count += 1
//     }
//     else {
//         son = son + 1
//         count += 1
//     }
// }
// console.log(count)

//  7 - masala 

// let N = 10, K = 3, count = 0

// for (let i = 0; i <= N; i++){
//     // console.log(count, K**i)
//     count = count + K**i    
// }

// console.log(count)

//  8 - masala

// let t = 5, T = 29 , delay = 0

// if ((t + T) >= 24) {
//     delay = (t + T) % 24
//     console.log(delay)
// }
// else {
//     delay = t + T
//     console.log(delay)
// }

//  9 - masala

// let bosh = 9, panja = 24, count

// if (panja % 2 == 0){
//     count =  bosh + panja / 2 + 1
//     console.log(count)
// }
// else {
//     console.log("-1")
// }



