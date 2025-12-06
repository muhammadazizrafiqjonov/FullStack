//  1- masala

// let son = 51 , bir, on

// bir = son % 10 

// on  = (son - bir) / 10

// if (bir > on) {
//     console.log(true)
// }
// else if (bir < on) {
//     console.log(false)
// }
// else {
//     console.log(son)
// }


//  2 - masala


// let son = 1331, son1, number = 0

// son1 = son

// while(son > 0) {                        
//     number = son % 10 + number * 10    
    // son = (son - son % 10)/ 10           
// }                          
// if (son1 == number) {      
//     console.log(true)      
// }
// else {
//     console.log(false)
// }


// 3- masala


// let n = 134
// let reverseNumber = 0

// while(n){                                        
//     reverseNumber = reverseNumber * 10 + n % 10
//     n = (n - n % 10) / 10
// }

// let isActive = true                 
// while(reverseNumber){
//     if(reverseNumber % 10 != 9 && isActive){                       
//         n = n * 10 + 9                                             
//         reverseNumber = (reverseNumber - reverseNumber % 10) / 10  
//         isActive = false                                             
//     }else {                                                         
//         n = n * 10 + reverseNumber % 10                              
//         reverseNumber = (reverseNumber - reverseNumber % 10) / 10 
//     }
// }
// console.log(n)

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
