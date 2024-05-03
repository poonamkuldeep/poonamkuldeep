const input=require("readline-sync")
let num = input.questionInt("number")
let num1= input.questionInt("number")
let num2= input.questionInt("number")
if (num=num1=num2)
{
    console.log("all equal")
}
else if(num=num1!=num2)
{
    console.log( "two number is equal")
}else if (num!=num1!=num2)
{
    console.log("all are different")
}
// if(num>num1)
// {
//     max=num;
//     min=num1;
// }
//     max=num1;
//     min=num;
// if(max>num2)
// {
//     max1=max;
//     min1=num2;
// }
//     max1=num2;
//     min1=max;

// if(num%2==0)
// {
//     console.log(largesteven)
// }
// else{
//     console.log(largestodd)
// }