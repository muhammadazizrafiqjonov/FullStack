//                                             SHIFT

// let arr = [3,2,5,3,45,6]


// Array.prototype.myShift = function(){

//     let temp1 = this[0]

//     for (let i = 0; i < this.length; i++) {
//         this[i] = this[i+1]
//     }
//     this.length -= 1

//     return temp1

// }

// console.log(arr.myShift())
// console.log(arr)

//                                             UNSHIFT

// let arr = [3,2,5,3,45]

// Array.prototype.myUnShift = function(a){

//     if (a != null) {

//     for (let i = this.length; i > 0; i--) {
//         this[i] = this[i-1]
//     }
//     this[0] = a

//     }


//     return this.length

// }

// console.log(arr.myUnShift("a"))
// console.log(arr)

//                                             INCLUDES

// let arr = [3,2,5,3,45]

// Array.prototype.myIncludes = function(a){

//     if (a != null) {

//         for (let i = 0; i < this.length; i++){
//             if (this[i] == a) {
//                 return true
//             }
//         }

//     }
//     return false

// }

// console.log(arr.myIncludes(2))
// console.log(arr)

//                                             INDEXOF

// let arr = [3,2,5,3,45]

// Array.prototype.myIndexOf = function(a){

//     if (!isNaN(a)) {

//         for (let i = 0; i < this.length; i++){
//             if (this[i] == a) {
//                 return i
//             }
//         }

//         return -1

//     }
//     return -1

// }

// console.log(arr.myIndexOf(0))
// console.log(arr)

//                                             SPLICE 

//  let arr = [3,2,5,3,45]

//  Array.prototype.mySplice = function(a, b, ...n){
//     let newArr1 = [], newArr2 = [], count1 = 0,count2 = 0
    
//     if (b == null || b > this.length) {
//         b = this.length -1
//     }


//     for (let i = a; i <= b; i++) {
//         newArr1.push(this[i])
        
//     }
//     for (let i = a; i <= b; i++){
//         this[i] = null
//     }

//     for (let i = 0; i < this.length; i++) {
//         if (this[i] == null){
//             this[i] = n[count1]
//             count1 += 1
//         }
//     }
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] != null){
//             newArr2.push(this[i])
//         }
//     }
//     for (let i = 0; i < this.length; i++) {
//         this[i] = null
//     }

//     for (let i = 0; i < this.length; i++) {
//         this[i] = newArr2[i]
//         if (this[i] != null) {
//         count2 += 1
//         }
//     }
//     this.length = count2

//     return newArr1
//  }

// console.log(arr.mySplice())
// console.log(arr)

//                                                          SLICE

// let arr = [3,2,5,3,45]

// Array.prototype.mySlice = function(a,b){
//     let newArr = []
//     if(!isNaN(a) && !isNaN(b)){
//         for (let i = a; i < b; i++){
//             if (i > this.length - 1){
//                 return newArr
//             }
//             newArr[i-a] = this[i]

//         }
//         return newArr
//     }
//     else if (!isNaN(a) || !isNaN(b)) {
//         for (let i = a; i < this.length; i++){
//             newArr[i-a] = this[i]
//         }
//         return newArr
//     }
//     return this

// }

// console.log(arr.mySlice(1))
// console.log(arr)



//                                         FILTER

// let arr = [1,2,3,4,5]

// Array.prototype.myFilter = function(callback){
//     let newArr = []

//     for (let i = 0; i < this.length; i++){
//         if (callback(this[i])){
//             newArr.push(this[i])
//         }
//     }

//     return newArr
// }


// console.log(arr.myFilter((el) => el % 2 == 0))
// console.log(arr)
//                                                  FIND

// let arr = [3,3,5,3,4]

// Array.prototype.myFind = function(callback){
    
//     for (let i = 0; i < this.length; i++){
//         if (callback(this[i])){
//             return i
//         }
//     }

//     return undefined
// }


// console.log(arr.myFind((el) => el % 2 == 0))
// console.log(arr)

//                                                     JOIN

// let arr = [3,3,5,3,4,0]

// Array.prototype.myJoin = function(a) {
//     let str = ""
//     for (let i = 0; i < this.length; i++) {
//         str += this[i]
//         if(i == this.length - 1){
//             return str
//         }
//         if (a != undefined) {
//             str += a
//         }
//         else {
//             str += ","
//         }
        
//     }

//     return str
// }

// console.log(arr.myJoin())
// console.log(arr)

//                    MAP

// let arr = ["Salom", "Aziz", "Hello"]

// Array.prototype.myMap = function(callback){
//     let newArr = []

//     for (let i = 0; i < this.length; i++){
//         if (callback(this[i])){
//             newArr.push(callback(this[i]))
//         }
//         else {
//             newArr.push(undefined)
//         }
//     }

//     return newArr
// }


// console.log(arr.myMap(item => item.length))
// console.log(arr)

//                          FOREACH

// let arr = ["Salom", "Aziz", "Hello"]

// Array.prototype.myForEach = function(callback){

//     for (let i = 0; i < this.length; i++){
//         callback(this[i])
//     }

// }

// console.log(arr.myForEach(item => {
//     if(item.length >= 5){
//         console.log(item)
//     }
// }))
// console.log(arr)

//                                       FILL

// let arr = [3,2,5,3,45]

// Array.prototype.myFill = function(a,b,c){

//     if (a != null) {
//         if(!isNaN(b) && !isNaN(c)){
//         for (let i = b; i < c; i++){
//             if (i > this.length - 1){
//                 return this
//             }
//             this[i] = a
//         }
//         return this
//         }
//         else if (!isNaN(b)) {
//             for (let i = b; i < this.length; i++){
//                 this[i] = a
//             }
//             return this
//         }
//         else {
//             for (let i = 0; i < this.length; i++) {
//                 this[i] = a
//             }
//         }
//         return this

//     }
//     else {
//        for (let i = 0; i < this.length; i++) {
//                 this[i] = a
//             } 
//     }
//     return this

// }

// console.log(arr.myFill())
// console.log(arr)

//                             SOME


// let arr = [15,16,23,45,26,19]

// Array.prototype.mySome = function(callback){

//     for (let i = 0; i < this.length; i++){
//         if (callback(this[i])){
//             return true
//         }
//     }

//     return false
// }


// console.log(arr.mySome(item => item > 20 ))
// console.log(arr)

//                           EVERY

// let arr = [15,16,23,45,26,19]

// Array.prototype.myEvery = function(callback){

//     for (let i = 0; i < this.length; i++){
//         if (!callback(this[i])){
//             return false
//         }
//     }

//     return true
// }


// console.log(arr.myEvery(item => item > 14 ))
// console.log(arr)


//                                 REDUCE 

// let arr = [1,2,3,4]

// Array.prototype.myReduce = function(callback,n){
//     let acc = 0
//     acc += n
//     for (let i = 0; i < this.length; i++){
//         acc = callback(acc,this[i])
//     }

//     return acc

// }

// console.log(arr.myReduce((acc, son) => acc += son,10))
// console.log(arr)


//                                   REVERSE

// let arr = [1,2,3,4,5]

// Array.prototype.myReverse = function(){
//     let temp
//     for (let i = 0; i < this.length / 2; i++){
//         temp = this[i]
//         this[i] = this[this.length-1-i]
//         this[this.length-1-i] = temp
//     }
//     return this
// }

// console.log(arr.myReverse())
// console.log(arr)