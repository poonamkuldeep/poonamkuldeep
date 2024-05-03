const input=require("readline-sync")
let p=input.questionInt("enter the number")
u=0
while(p>0)
{
    n=p%10;
    u=u*10+n;
    p=Math.floor(p/10);
    
}
console.log( u )