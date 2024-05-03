const input=require("readline-sync")
let n=input.questionInt("enter the number")
let i=1;
let sum=0;
while(i<=n)
{
    sum=sum+1/i;
    i=i+1;
}
console.log(sum)

