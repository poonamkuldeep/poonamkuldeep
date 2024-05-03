const input=require("readline-sync")
let p=input.questionInt("enter the number")
  sum=0;
while(p>0)
{
    m=p%10;
    sum=sum+m;
    p=Math.floor(p/10);
}
console.log(sum);