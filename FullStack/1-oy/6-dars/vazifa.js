//  1-misol 

// let n = 10 , a = 60 , b = 80, uzunlik_quti , uzunlik_gugurt

// uzunlik_quti = Math.sqrt(a**2 + b**2)

// for (let i = 1; i <= n; i++) {
//     uzunlik_gugurt = Math.floor(Math.random() * (150) + 1)
//     if (uzunlik_gugurt > uzunlik_quti) {
//         console.log(uzunlik_gugurt)
//         console.log("TRASH")
//     }
//     else {
//         console.log(uzunlik_gugurt)
//         console.log("BOX")
//     }

// }

//  2 - misol

// let a = 1, b = 100, count = 0, i = 1

// while(5**i <= b){

//     for (let j = a; j <= b ; j++ ){
//         if (j % 5**i == 0){
//             count += 1
//         }
//     }
//     i += 1

// }

// console.log(count)

//  3 - masala


// let n = 2, count1 = 0, count2 = 0

// for (let i = Math.pow(10 , n-1); i < 10**n; i++){
//     let j = i
//     count1 = 0
//     while(j > 0) {
//         if (j % 2 != 0){
//             count1 += 1
//         }
//         j = (j - j % 10) / 10
//     }
//     if (count1 == n){
//         count2 += 1
//     }

// }

// console.log(count2)

//  4 - masala


// let bobo_yil = 1856, nabira_yil = 1916, count = 0

// if (nabira_yil + nabira_yil % 100 == 1932){
//     console.log(2022 - nabira_yil)
// }
// else {
//     console.log("NO")
// }

// if (bobo_yil + bobo_yil % 100 == 1932){
//     console.log(2022 - bobo_yil)
// }
// else {
//     console.log("NO")
// }


// let users = [1,2,3,4]

// users.pop(1)

// console.log(users)

let a = [3,5,4,4,9,7], son

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++){
        if (a[i] > a[j]){
            son = a[i]
            a[i] = a[j]
            a[j] = son
        }
    }
}

console.log(a)