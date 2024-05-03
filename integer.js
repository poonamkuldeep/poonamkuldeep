const input = require("readline-sync")
let n = input.questionInt("enter the number");
if(n%2==0)
{
    console.log(n)
}
else
{
    p=n*2;
    console.log(p)
}