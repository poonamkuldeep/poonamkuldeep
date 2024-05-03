const input=require("readline-sync")
let n=input.questionInt("enter the number")
let m=input.questionInt("enter the number")
let i=1;
let sum=0;
while(m<=n)
{
    sum=sum+m;
    m=m+1;
}
console.log(sum)