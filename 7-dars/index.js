let arr = [1,2,3,3,23,2]
let max = 0, count = 1 , newArr = []

for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if (arr[i] == arr[j]){
            count += 1
        }
    }
    if (count > max) {
        max = count
        newArr = []
        newArr.push(arr[i])
    }
    else if (count == max) {
        newArr.push(arr[i])
    }
    count = 1
}

console.log(newArr)

