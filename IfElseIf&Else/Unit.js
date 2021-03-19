const prompt = require("prompt-sync")();
let Digit = prompt('Enter the Digit 1 ,10,100,1000 : ');
 Digit = Number(Digit);

 
 if(Digit ==1)
 {
     console.log("One")
 }
 else if(Digit ==10)
 {
     console.log("Ten")
 }else if(Digit ==100)
 {
     console.log("Hundred")
 }else if(Digit ==1000)
 {
     console.log("Thousand")
 }else
 {
     console.log("Wrong Input")
 }