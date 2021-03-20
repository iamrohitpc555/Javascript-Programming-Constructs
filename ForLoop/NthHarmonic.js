const prompt = require('prompt-sync')();
const num = prompt('Enter a term : ');
let Term = Number(num);
let series=1/1
for(let i=1;i<=Term;i++)
{
    if(i<Term)
    {
        console.log(`1/${i}+`)
        series+=1/i
    }
    if(i==Term)
    {
        console.log(`1/${i}+`)
        series+=1/i
    }
}