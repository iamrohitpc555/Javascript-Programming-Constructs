const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
console.log("Prime Factors are : ");
for (let i = 2; i <= number; i++) {
    while ((number % i) == 0) {
        number = number / i;
        console.log(i);
    }
}