const prompt = require('prompt-sync')();
const num1 = prompt('Enter a Number : ');
let number = Number(num1);
fact =1
for(i=1;i<=number;i++)
{
    fact=fact*i
}
console.log(`The Factorial of ${number} is :` +fact)