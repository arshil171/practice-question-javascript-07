//  Q - 1  Calculate Total Expenses:
// A family wants to calculate their weekly expenses. They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days. Write a function to calculate the total expense.
// Hint: Sum all elements of the array.

function totalSpent(total){
  return total
}

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
function findHighTemp(temp){
  return Math.max(...temp)
}

let temp = [32, 35, 30, 31, 33, 36, 34]

let tempHigh = findHighTemp(temp);
// for(let i=0;i<temp.length;i++){
//     if(temp [i+1] > temp [i]){
//       tempHigh = temp[i+1]
//     }
// }
console.log("Q - 2  : output")
console.log("The highest temperature over 7 day is" ,tempHigh)



//  Q - 3       Find the Lowest Test Score:
//            A student got test scores of [56, 72, 48, 90, 65]. Write a function to find the lowest score.
//            Hint: Use a loop or Math.min.


function findLowScore(score){
  return Math.min(...score)
}

let score = [56,72,48,90,65]

let lowScore = findLowScore(score);

console.log("Q - 3  : output")
console.log("The lowest score student got" ,lowScore)




// Q - 4 In a company, the monthly salaries of 5 employees are [45000, 55000, 30000, 70000, 60000]. Write a function to calculate the average salary.
// Hint: Sum all elements and divide by the array length.


function monthlySalary(totalSalary){
  return totalSalary
}

let salaryOfEmployee = [45000, 55000 ,30000 ,70000, 60000]
let totalSalary = 0
let averageSalary = 0 

let monthlySalary1 = salaryOfEmployee.map((num)=>{
      totalSalary += num
})
console.log("Q - 4  : Output")
console.log("the total Salary of 5 employee = ",totalSalary) 



for(let i=0;i<salaryOfEmployee.length;i++){
  averageSalary = totalSalary / salaryOfEmployee[i]
}
console.log("The Average salary of 5 employee",averageSalary)