const prompt = require("prompt-sync")();
let Digit = prompt('Enter the Digit : ');
 Digit = Number(Digit);

 
 if(Digit ==1)
 {
     console.log("Sunday")
 }
 else if(Digit ==2)
 {
     console.log("Monday")
 }else if(Digit ==3)
 {
     console.log("Thusday")
 }else if(Digit ==4)
 {
     console.log("Wednesday")
 }else if(Digit ==5)
 {
     console.log("Thursday")
 }else if(Digit ==6)
 {
     console.log("Friday")
 }else if(Digit ==7)
 {
     console.log("Saturday")
 }
else{
    console.log("Invalid input");
}