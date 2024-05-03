const input=require("readline-sync");
let a=input.questionInt("enter the number")
let b=input.questionInt("enter the number")
let c=input.questionInt("enter the number")
let d=input.questionInt("enter the number")
if(a>b)
{
    max=a; min=b;
}
else{
    max=b;min=a
}
if(c>max)
{
    max1=c;min1=max
}
else{
    max1=max;min1=c
}
if(d>max1)
{
    console.log(d)
}
else{
    console.log(max1)
}