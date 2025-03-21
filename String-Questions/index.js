// Q - 19 Count Vowels in a Name:
//        A user enters their name "Rahul". Write a function to count how many vowels are in the name.
//        Hint: Check for vowels (a, e, i, o, u).


let string = "Rahul"
let count = 0
let vowel1 ="a"
let vowel2 ="e"
let vowel3 ="i"
let vowel4 ="u"
let vowel5 ="o"

for (let i = 0; i < string.length; i++) {
    if(string[i] === vowel1 || string[i] === vowel2 || string[i] === vowel3 || string[i] === vowel4 || string[i] === vowel5){
        count++
    }
}
console.log("Q - 19 : output")
console.log("Number of vowels in the name 'Rahul':", count)


// Q - 20 Reverse a Product Code:
//        A company has a product code "AB1234". Write a function to reverse this code.
//        Hint: Convert to array, reverse, and join.


let productCode = "AB1234"
let reverse = ""
// for(let i = productCode.length ; i > productCode.length ; i--){
//     reverse += productCode[i] 
// }
reverse += productCode[0]

console.log("Q - 20 : output")

console.log("Reversed product code:", reverse)