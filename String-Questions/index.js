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


let productCode = "A-B-1-2-3-4"
let reverse = ""
// for(let i = productCode.length ; i >= productCode.length ; i--){
//     reverse += productCode[i]
//     return reverse
// }
// // reverse += productCode[5]
productCode = productCode.split("-")


for(let i = productCode.length - 1 ; i >= 0 ; i--){
    reverse += productCode[i]  
}

console.log("Q - 20 : output")

console.log("Reversed product code:", reverse)




// Q - 21 Check if a Name is a Palindrome:
//        A child enters the name "radar" into a game. Write a function to check if the name is a palindrome (same forwards and backwards).
//        Hint: Compare string to its reverse.

let childName = "radar"
let childNameReverse = ""

for(let i=childName.length-1;i>=0;i--){
     childNameReverse += childName[i]
}

console.log("Q - 21 : output")

if(childName == childNameReverse){
    console.log("The child Name is palindrome because the name is same in forwards and backwords")
}





// Q -22 Remove Spaces from a Message:
//       A user enters a message "Hello World 2024". Write a function to remove all spaces from the message.
//       Hint: Use .replace() or .split() and .join()


let string2 = "Hello World 2024"



string2 = string2.split(" ")

let string3 = string2




string3 = string3.join("")
console.log("Q - 22 : output")

console.log("after Remove  All spaces from the message :-",string3)




// Q - 23 Convert a Sentence to Words:
//        A sentence "JavaScript is fun" is given. Write a function to convert the sentence into an array of words.
//        Hint: Use .split() with a space.



let sentence = "JavaScript is fun" 

sentence = sentence.split(" ")
console.log("Q - 23 : output")

console.log(" After convert the sentence in Array :- ",sentence)
