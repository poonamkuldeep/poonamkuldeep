const input = require("readline-sync")
let n = input.questionInt("enter the length")
let i=1;
let sum=0;
while(i<n)
{
    if(n%i==0)
    {
      sum = sum+i;
    }i++;
}
  if(sum==n)
  {
    console.log("perfect number",sum=n)
  }else
   {
     console.log("not perrfect number",sum=n)
   }