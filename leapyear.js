const input = require("readline-sync")
let p = input.questionInt("enter the number");
if(p%4==0)
{
    if(p%100!==0)
    {
        console.log("leapyear")
    }else
    if(p%400==0)
    {
        console.log("leapyear")
    }else{
        console.log("not leapyear")
    }
}else{
    console.log("not leapyear")
}