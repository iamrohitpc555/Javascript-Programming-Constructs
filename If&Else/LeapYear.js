const prompt = require("prompt-sync")();
let Year = prompt('Enter the Year : ');
 Year = Number(Year);

if (Year % 4 == 0 && Year % 100 != 0 || Year % 400 == 0 ) 
{
    console.log("Leap year");
}
else {
    console.log("Not a Leap Year");
}