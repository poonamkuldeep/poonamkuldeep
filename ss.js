const input = require("readline-sync")
let n = input.questionInt("enter the number")
let sum =0;
let sum1=0;
let i = 1;
while(i<=n)
{
    if(i%2==0){
    sum=sum + i**2;
    console.log(sum)
    }
    else{
    sum1=sum1+i**3;
    console.log(sum1)
    }
i++;
}
let sum2=sum+sum1;
// console.log(sum2);
console.log("Sum of squares of even number",sum)
console.log(" Sum of cubes of odd numbers",sum1)
console.log("total sum",sum2)


    