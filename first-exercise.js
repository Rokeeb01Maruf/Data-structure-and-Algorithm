// Getting largest number
function largestNumber(values){
    let largest = 0
    for (let i=0; i<values.length; i++){
        if(largest-values[i] < 0){
            largest = values[i]
        }
    }
    return largest
}
largest = largestNumber([2, 4, 5, 1, 8, 9, 6])

// Reversing a string

function reverseString(value){
    let reversed = "";
    for (let i = value.length - 1; i > -1; i--){
        reversed+=value[i]
    }
    return reversed
}
reverse = reverseString("Authentication")

// Count vowels

function countVowels(value){
    const vowels = ["a", "e", "i", "o", "u"]
    let vowelCount = 0
    for (let i = 0; i < value.length; i++){
        if(vowels.includes(value[i].toLowerCase())){
            vowelCount++
        }
    }
}
vowelCount = countVowels("Banana")

// Duplicated value checker
function duplicatedValues(value){
    const single = []
    const duplicates = []
    for (let i=0; i<value.length; i++){
        if(single.includes(value[i])){
            duplicates.push(value[i])
        }else{
            single.push(value[i])
        }
    }
    return duplicates
}
duplicates = duplicatedValues([1,2,3,2,4,1])

// Frequency checker
function characterFrequency(value){
    let charactersFrequency = {}
    for(let i = 0; i < value.length; i++){
        if(value[i] in charactersFrequency){
            charactersFrequency[value[i]] ++
        }else{
            charactersFrequency[value[i]] = 1
        }
    }
    return charactersFrequency
}
frequency = characterFrequency("banana")

// Palindrome checker
function palindromeChecker(value){
    let palindrome = true
    for(let i=0; i < value.length; i++){
        if(value[i] !== value[value.length - 1 - i]){
            palindrome = false
        }
    }
    return palindrome
}

checkPalindrome = palindromeChecker("level")

// Sum of a lists
function sum(value){
    let summation = 0
    for (let i=0; i < value.length; i++){
        summation += value[i]
    }
    return summation
}
summation = sum([2,4,6,8])

// Removing duplicates
function removeDuplicates(value){
    const cleaned = [];
    for(let i=0; i<value.length; i++){
        if(!cleaned.includes(value[i])){
            cleaned.push(value[i])
        }
    }
    console.log(cleaned)
}

removeDuplicates([1,2,2,3,1,4])



// Second largest number
function secondLargest(values){
    reArrange = []
    for (let i = 0; i < values.length; i++){
        if(reArrange.length < 1){
            reArrange.push(values[i])
        }else{
            reArrange.forEach((data, index) => {
                if(data < values[i] && index == reArrange.length - 1){
                    reArrange.push(values[i])
                }else if(data > values[i] && !reArrange.includes(values[i])){
                    reArrange.splice(index , 0, values[i])
                }
            });
        }
    }
    return reArrange[reArrange.length-2]
}

second = secondLargest([1, 0, 5, 3, 2, 4])
