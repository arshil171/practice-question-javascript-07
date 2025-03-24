//  Q-1   For Loop and Array
//        Write a for loop to iterate over an array of numbers [1, 2, 3, 4, 5] and print each number to the console

let array = [1, 2, 3, 4, 5]
console.log("Q - 1 : output")
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}



//  Q-2     While Loop and Array
//          Write a while loop to print all the elements of the array [10, 20, 30, 40, 50] to the console.


let i = 0;
let arrayWhile = [10, 20, 30, 40, 50]
console.log("Q - 2 : output")

while (i < arrayWhile.length) {
    console.log(arrayWhile[i])
    i++
}



// Q -3  String Length
//       Given a string let str = "Hello, World!";, use a for loop to find and print the length of the string.


let str = "Hello, World!"
let count = 0

for (let i = 0; i < str.length; i++) {
    count++
}
console.log("Q - 3 : output")
console.log("Length of the string using Count :", count)
console.log("Length of the string: ", str.length)


// Q - 4  String Characters
//        Use a for loop to print each character of the string "JavaScript" one by one

let strChar = "JavaScript"
console.log("Q - 4 : output")
for (let i = 0; i < strChar.length; i++) {
    console.log(strChar[i])
}


// Q - 5    Sum of Array Elements
//         Write a for loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].

let arraySum = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < arraySum.length; i++) {
    sum += arraySum[i]
}
console.log("Q - 5 : output")
console.log("Sum of the array elements: ", sum)


//  Q - 6      Find Maximum in Array
//            Given an array [3, 1, 4, 1, 5, 9], use a for loop to find and print the maximum value 



let arrayMax = [3, 1, 4, 1, 5, 9]

let max = arrayMax[0]

for (let i = 1; i < arrayMax.length; i++) {
    if (arrayMax[i] > max) {
        max = arrayMax[i]
    }
}
console.log("Q - 6 : output")
console.log("Maximum value in the array: ", max)


// Q - 7  Array Reversal

//        Write a for loop to reverse the array [1, 2, 3, 4, 5] and print the reversed array.



let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    
    reversedArr[reversedArr.length] = arr[i];
}
console.log("Q - 7 : output")
console.log("The reversed array :-",reversedArr);
// Q -8    String to Uppercase
//         Given a string `let greeting = "hello";`, use a `for` loop to convert each character to uppercase and print the result.


let greeting = "hello";
console.log("Q - 8 : output")

for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i].toUpperCase());
}

// Q - 9    Counting Elements
//         Write a while loop to count the number of elements in the array [2, 4, 6, 8, 10] and print the count




let arrayCount = [2, 4, 6, 8, 10]

let count1 = 0
let i1 = 0

while (i1 < arrayCount.length) {

    count1++
    i1++
}
console.log("Q - 9 : output")
console.log("Count of the array elements: ", count1)



// Q -10    Find Even Numbers
//         Given an array [1, 2, 3, 4, 5, 6], use a for loop to print only the even numbers.



let evenCount = [1, 2, 3, 4, 5, 6]

console.log("Q - 10 : output")
console.log("The even number in array is :-")
for (let i=0 ; i< evenCount.length;i++)
{
    if(evenCount[i] % 2 === 0)
        console.log(evenCount[i])
}



// Q -11  Array Length
//        Write a while loop to find and print the length of the array [5, 10, 15].


let arraylength = [5,10,15]


let i2 = 0

while (i2 < arraylength.length) {

    
    i2++
}
console.log("Q - 11 : output")
console.log("lenghth of the array elements: ", i2)




// Q -12  Sum of String Lengths
 //        Given an array of strings `["apple", "banana", "cherry"]`, use a `for` loop to calculate and print the total length of all strings combined.
 
 
 
 let sumString = ["apple","banana","cherry"]
 let sumTotal = 0
 
 
 for(let i=0;i<sumString.length;i++)
 {
     sumTotal += sumString[i].length
 }
 console.log("Q - 12 : output")
 console.log("Total length of all String ",sumTotal)
 
 
 
 
 //  Q -13 Concatenate Strings
 //        Given an array of strings `["This", "is", "JavaScript"]`, use a `for` loop to concatenate them into one string and print it.
 
 
 let stringConcate = ["This" , "is" , "JavaScript"]
 
 let concatenatedString = ""
 
 for (let i=0;i<stringConcate.length;i++){
     concatenatedString += stringConcate[i]
 }
 console.log("Q - 13 : output")
 console.log("concateneted string :" , concatenatedString)
 
 
 // Q-14  Find String Index
 //       Write a `for` loop to find and print the index of the character `'a'` in the string `"JavaScript"`.
 
 
 let stringIndex  = "JavaScript"
 console.log("Q - 14 : output")
 
 for (let i=0;i<stringIndex.length;i++){
     if(stringIndex[i] === "a"){
         console.log(`chracter 'a' found at index ${i}`)
     }
 }
 
 
 // Q-15    Count Vowels in String
 //         Write a `for` loop to count the number of vowels in the string `"Hello, World!"` and print the count.
 
 
 let countVowels = "Hello, World!"
 let countVowelString = "aeiouAEIOU"
 let countVowelString1 = 0
 
 for (let i=0;i<countVowels.length;i++){

        if(countVowelString.indexOf(countVowels[i]) !== -1){
            countVowelString1++
        }
 }
 console.log("Q - 15 : output")
 console.log("The Number of Vowel in String :-" , countVowelString1)