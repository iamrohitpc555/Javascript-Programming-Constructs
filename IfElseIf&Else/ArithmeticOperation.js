const prompt = require('prompt-sync')();
let max = 0;
let min =0;
let a =prompt("Enter value of a : ")
let b =prompt("Enter value of b : ")
let c =prompt("Enter value of c : ")
 a =Number(a)
 b =Number(b)
 c =Number(c)

 let operation1=a + b * c
 let operation2=a % b + c
 let operation3=c + a / b
 let operation4=a * b + c
 if(operation1 > operation2 && operation1 > operation3 && operation1 > operation4)
 {
      max = operation1
 }
 else if(operation2 > operation1 && operation2 > operation3 && operation2 > operation4)
 {
      max = operation2
 }
 if(operation3 > operation1 && operation3 > operation2 && operation3 > operation4)
 {
      max = operation3
 }
 if(operation4 > operation1 && operation4 > operation2 && operation4 > operation3)
 {
      max = operation4
 }




 if(operation1 < operation2 && operation1 < operation3 && operation1 < operation4)
 {
      min = operation1
 }
 else if(operation2 < operation1 && operation2 < operation3 && operation2 < operation4)
 {
      min = operation2
 }
 else if(operation3 < operation1 && operation3 < operation2 && operation3 < operation4)
 {
      min = operation3
 }
 else if(operation4 < operation1 && operation4 < operation2 && operation4 < operation3)
 {
      min = operation4
 }

 console.log("The Max is " +max+ " The min is " +min)
