const prompt = require("prompt-sync")();
const Day = prompt('Enter the Day : ');
const Month = prompt('Enter the Month in Digit Format : ');
let day = Number(Day);
let month = Number(Month);

if ((month == 3 && day >= 20 ) || (month == 4 && day > 0 ) ||
    (month == 5 && day > 0 && ) || (month == 6 && day > 0 )) {
    console.log("True");
}
else {
    console.log("False");
}