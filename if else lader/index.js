
 
 
 
 // if else lader
 
 
 // Q-1   You have a thermometer that measures room temperature. Write an if-elseif condition to determine:

//        If the temperature is below 18°C, print "It's too cold, turn on the heater."
//        If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
//        If the temperature is above 25°C, print "It's too hot, turn on the fan."
 
 let temp = 27;
 
 if (temp < 18) {
     console.log("it is too cold , turn on the heater")
 }
 else if (temp > 18 && temp < 25) {
     console.log("The tempetature is comfortable")
 }
 else if (temp > 25) {
     console.log("it's too hot,turn on fan")
 }
 
 
 
 // Q-2     A student gets a score out of 100 in an exam. Write an if-elseif condition to determine:

//          If the score is 90 or above, print "Grade A."
//          If the score is between 75 and 89, print "Grade B."
//          If the score is between 50 and 74, print "Grade C."
//          If the score is below 50, print "Grade D."
 
 let score = 45
 
 if (score >= 90) {
     console.log("Grade A")
 }
 else if (score >= 75 && score <= 89) {
     console.log("Grade B")
 }
 else if (score >= 50 && score <= 74) {
     console.log("Grade C")
 }
 else if (score <= 50) {
     console.log("Grade D")
 }
 
 
 
 
 
 // Q-3   You are driving and approach a traffic signal. Write an if-elseif condition to determine:

//        If the light is "Red", print "Stop."
//        If the light is "Yellow", print "Slow down."
//        If the light is "Green", print "Go."



 let Red;
 let Yellow;
 let Green;
 
 let light = Red ;
 
 if (light === Red)  {
     console.log("stop the vehicle")
 }
 else if (light == Yellow)  {
     console.log("slow down vehicle")
 }
 else if (light == Green) {
     console.log("Go")
 }
 else {
     console.log("use appropriat color")
 }
 
  
 // Q-4   A store is giving discounts based on the total bill amount. Write an if-elseif condition to determine:

//        If the bill is less than $50, no discount.
//        If the bill is between $50 and $100, give a 10% discount.
//        If the bill is more than $100, give a 20% discount.
 
 let billAmount = 70;
 
 
 if (billAmount < 50){
     console.log("No Discount")
 }
 else if(billAmount > 50  && billAmount < 100){
     console.log("Give a 10% Discount")
 }
 else if(billAmount > 100){
     console.log("Give 20% Discount")
 }
 
 
 // Q - 5  You have different tasks to do based on the time of day. Write an if-elseif condition to determine:

//         If the time is before 7 AM, print "It's too early, sleep a bit more."
//         If the time is between 7 AM and 10 AM, print "Time for breakfast and morning exercise."
//         If the time is between 10 AM and 6 PM, print "Time to work or study."
//         If the time is after 6 PM, print "Relax for the day."
 
 const  currentTime = new Date();
 const currentHour = currentTime.getHours();
 
 if(currentHour < 7){
     console.log("It's too early , sleep a bit more.")
 }
 else if(currentHour >=7 && currentHour < 10){
     console.log("Time for breakfast and morning exersise.")
 }
 else if(currentHour >= 10 &&  currentHour < 18){
     console.log("Time to work or study.")
 }
 else{
     console.log("Relax for the day")
 }




