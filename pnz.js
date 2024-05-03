const input=require("readline-sync");
let a = input.questionInt("enter the number");
if(a>0)
{
  console.log("positive")
}
if(a<0)
{
    console.log("negative")
}

if(a==0)
{
    console.log("zero")
}