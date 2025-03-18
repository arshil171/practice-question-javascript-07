//  Q - 1  Calculate Total Expenses:
// A family wants to calculate their weekly expenses. They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days. Write a function to calculate the total expense.
// Hint: Sum all elements of the array.



let totalExpance = [200 , 150 ,100 ,350, 50]
let total = 0

let totalExpance2 = totalExpance.map((num)=>{
      total += num
})
console.log("Q - 1  : Output")
console.log("the total expance of family over week = ",total) 



// Q-2  Find the Highest Temperature:
// A weather app shows the temperatures recorded in a city over 7 days as [32, 35, 30, 31, 33, 36, 34]. Write a function to find the highest temperature in the array.
// Hint: Use a loop or the Math.max function.


let temp = [32, 35, 30, 31, 33, 36, 34]


for(let i=0;i<temp.length;i++){
    
}