let min=999;
let max=0;
minLimit =100;
maxLimit =999; 
for(let i = 1 ;i<5;i++)
{
        let no= Math.floor(Math.random()*(maxLimit -minLimit +1)+minLimit);
        console.log(+i+ ": The no is :" +no  );
        if(  min > no)
        {
                min = no;
        }
         if ( max < no )
        {
                max = no;
        }
        
        
}
console.log("The Min no is : " +min+ " The maximum no is : " +max );