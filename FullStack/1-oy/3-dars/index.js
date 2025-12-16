//   1-masala

// let son =1, sum1 = 0, sum2 = 1

// while (son < 11) {
//     if (son % 2 == 0) {
//         sum1 += son
//     }
//     else {
//         sum2 *= son
//     }
//     son += 1
// }

// console.log(sum1)
// console.log(sum2)

/*   IZOH :  1 dan 10 gacha bolgan sonlardan juftlarining yigindisi va toqlarining kopaytmasini hisoblovchi dastur 

chegaralarni xohlagancha ozgartirsa boladi

*/


//  2- masala

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

/*  IZOH :  Biror bir sonning birlar va onlar xonasida sonni taqqoslovchi dastur, yani birlar xonasidagi son ,

onlar xonasidagi sondan katta bolsa true , aksincha bolsa false qaytaradi agar teng bolsa sonni ozini qaytaradi.

56 -> true , 32 -> false , 22 -> 22

 */


//  3 - masala


// let son = 1331, son1, number = 0

// son1 = son

// while(son > 0) {                       // Ushbu loop sonni teskarisiga ogirib beradi (103 -> 301 ...) 
//     number = son % 10 + number * 10    // qiymati nolga teng bolgan yangi ozgaruvchiga sonning 10 ga bolgandagi qoldigi va shu ozini 10 ga kopaytirib qoshamiz, 
    // son = (son - son % 10)/ 10         // songra dastlabki songa ozining 10 ga bolgandagi butun qismini tenglab qoyamiz, 
// }                                      // misol : 131  - >  1-aylanish number = 131 % 10 + 0 * 10 = 1   =>  son = (131 - 131 % 10) / 10 = 13
                                          //   2-aylanish   number = 13 % 10 + 1 * 10 = 13 , son = (13 - 13 % 10 ) / 10 = 1
                                          //   3-aylanish  number  =  1 % 10 + 13 * 10 = 131, son = (1 - 1 % 10) / 10 = 0 loop shu yerda toxtaydi
                                          // chunki endi son = 0 bolganligi uchun loop ni sharti bajarilmaydi, number = 131



// if (son1 == number) {      // bu yerda dastlabki son va uning teskarisi tekshiriladi 
//     console.log(true)      //  dastlabki son 131 va teskarisi number = 131 va true
// }
// else {
//     console.log(false)
// }


/* IZOH :  kiritgan sonni polindromelikka(1001, 2332, ...) tekshiradi, birinchi orinda kiritilgan sondan tashqari 2 ta qoshimcha ozgaruvchi ochiladi

birinchisiga kiritilgan sonning qiymatini beramiz , ikkinchisiga 0 qiymatini beramiz keyin biror bir loop yordamida dastlabki sonni teskarisiga ogiramiz va oxirida 

chiqqan son bilan dastlabki sonni solishtiramiz agar true bolsa polindrome bolmasa yoq.

 */

// 4- masala


// let n = 134
// let reverseNumber = 0

// while(n){                                        // bu loop sonni teskarisiga ogiradi
//     reverseNumber = reverseNumber * 10 + n % 10
//     n = (n - n % 10) / 10
// }

// let isActive = true                 // bu , sondagi birinchi 9 bolmagan raqamni 9 ga ozgartirganimizda boshqa bu amalni takrorlamasligi uchun kerak.
// while(reverseNumber){
//     if(reverseNumber % 10 != 9 && isActive){                        // raqamni 9 ga tekshiradi
//         n = n * 10 + 9                                              //raqamni orniga 9 yozadi
//         reverseNumber = (reverseNumber - reverseNumber % 10) / 10   //  sonni 10 ga bolgandagi butun qismini oladi 
//         isActive = false                                            // bu yerga qaytib kirmasligi uchun 
//     }else {                                                         
//         n = n * 10 + reverseNumber % 10                             //  sonni asliga qaytarish uchun yana qayta teskarisiga ogirish uchun    
//         reverseNumber = (reverseNumber - reverseNumber % 10) / 10 
//     }
// }
// console.log(n)

// ushbu dastur kiritilgan sonning shunday bitta raqamini almashitiradiki va natijada osha son bolishi mumkin bolgan eng katta songa aylanadi misol 134 -> 934 , 981 -> 991 ..
//  bu dastir birinchi bolib kiritilgan sonni teskarisiga ogiradi keyin osha sonni har bir raqamini 9 ga tekshirib chiqadi va 9 ga teng bolmagan birinchi raqamini 9 ga almashtiradi 
// va qolganlarini oz holicha tartiblaydi va shu bilan tugaydi.


// 5-masala

// let str =  "hello"

// uzunlik = str.length

// for (let i = uzunlik-1; i >= 0; i--){
//     console.log(str[i])
// }
// let n = uzunlik -1

// while(n >= 0) {
//     console.log(str[n])
//     n -= 1
// }

// n = uzunlik - 1

// do {
//     console.log(str[n])
//     n -= 1
// } while (n >= 0)

// kiritilgan stringni teskariga ogirib chiqarish uchun. hamma loop yordamida.


//  6 - masala


// let matn = "Salom Dunyo", count = 0, uzunlik

// uzunlik = matn.length

// for (let i = uzunlik-1; i >= 0; i--){
//     if (matn[i] == "a" ||  matn[i] == "e"  ||  matn[i] == "i"  || matn[i] == "o"  || matn[i] == "u" ){
//         count += 1
//     }
// }

// console.log(count)

//  kiritilgan stringda nechta unli harf borligini topuvchi dastur.