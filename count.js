const input=require("readline-sync")
let p=input.questionInt("enter the number")
count=0;
while(p>0)
{
    n=p%10;
    count=count+1;
    p=Math.floor(p/10);
}
console.log(count)