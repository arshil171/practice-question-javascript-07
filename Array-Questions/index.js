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



let monthlySalary1 = salaryOfEmployee.map((num)=>{
      totalSalary += num
})
console.log("Q - 4  : Output")
 

let i = salaryOfEmployee.length 

let salary = totalSalary / i
console.log("The Average salary of 5 employee",salary)



// Q-5     Reverse the Guest List:
//         You have a list of guests for a party: ["John", "Aman", "Rita", "Raj"]. Write a function to reverse the guest list.
//         Hint: Do not use .reverse().

function reversedArr(){
  return reversedArr
}
let arr = [ "John", "Aman", "Rita", "Raj"];
let reversedArr1 = []

for (let i = arr.length - 1; i >= 0; i--) {
    
    reversedArr1[reversedArr1.length] = arr[i];
}
console.log("Q -5 : output")
console.log("Rverse guest list",reversedArr1);



// Q -6   Check for Available Seats:
//        A movie theater has an array of available seat numbers: [3, 5, 7, 9, 12]. Write a function to check if seat number 7 is available.
//        Hint: Use .includes() or a loop
function seatAvailable(available){
  return available
}

let seatNo = [3,5,7,9,12]

let seat = 14



let available = seatNo.includes(seat)
   

console.log("Q - 6  : output")
console.log("The seat available in theater than true otherwise false : " ,available)


// Q -7 Remove the First Task:
//      You have a to-do list: ["Buy groceries", "Clean room", "Study"]. Write a function to remove the first task from the list and return the updated list.
//      Hint: Use .shift().


  function toDoList(remove){
   return remove
  }

  let toDoList1 = ["Buy groceries" , "Clean room", "Study"]
  let removeList = "Buy groceries"
  console.log("Q - 7 : output")
  console.log("Before update",toDoList1)
  let remove = toDoList1.shift(removeList)

  
  console.log("After upadeted to do List",toDoList1)


// Q -8  Remove Duplicate Phone Numbers:
//       A phone company wants to remove duplicate phone numbers from an array: [9876543210, 9123456789, 9876543210, 9000000000]. Write a function to remove duplicates.
//       Hint: Use Set or a loop.


let phone = [9876543210, 9123456789, 9876543210, 9000000000]

function removeDuplicate(arr){
  return arr
}

for(let i = 0; i < phone.length; i++){
      for (let j=i+1;j<phone.length;j++){
            if(phone[i]===phone[j]){
                  phone.splice(j,1)
                  j--
            }
      }
}
console.log("Q - 8 : output")
console.log("After remove duplicate number from company list",phone)

// Q - 9 Find Second Largest Sale Amount:
//       A shop recorded sales amounts: [200, 400, 100, 700, 500]. Write a function to find the second-largest sale.
//       Hint: Sort the array or find the largest, then exclude it

let array2 = [200, 400, 100, 700, 500]
let secondLargest = []

array2.sort((a,b)=>b-a)

secondLargest = array2[1]

console.log("Q - 9 : output")
console.log("The second largest sale amount is",secondLargest)

// Q - 10    Get the Last Product Sold:
//           A store records product sales as ["Shoes", "T-shirt", "Hat"]. Write a function to get the last product sold.
//           Hint: Access the last array element.



let product = ["Shoes", "T-shirt", "Hat"]
let lastProduct = product.map((productLast) => 
      {
            productLast = product[product.length - 1]
          return productLast})

console.log("Q - 10 : output")

console.log("The last product sold is",lastProduct[0])


// Q - 11   Check if Shopping Cart is Empty:
//          Write a function to check if the shopping cart array cart = [] is empty.
//          Hint: Check if the length is 0.
let shoppingCart = []
function checkEmpty(shoppingCart){
   

      if(shoppingCart.length == 0 ){
            console.log("Q - 12 : output")
            console.log("The shopping cart is empty")
      }
      else{
            console.log("Q - 12 : output")
            console.log("The shopping cart is not empty")
      }
}
// console.log("Q - 11 : output")
console.log(checkEmpty(shoppingCart))

