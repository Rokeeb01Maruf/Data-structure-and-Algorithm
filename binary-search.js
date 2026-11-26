function binarySearch(numbers, target){
    let start = 0
    let end = numbers.length - 1

    while(start <= end){
        const middle = Math.floor((start + end) / 2)
        if(numbers[middle] === target){
                return(`Target ${target} was found at index ${middle}`)
        }else if(numbers[middle] > target){
            end = middle - 1
        }else if(numbers[middle] < target){
            start = middle + 1
        }
    }

    return(`Target ${target} was not found`)
}

check = binarySearch([2,5,8,12,16,23,38,56,72], 72)
console.log(check)