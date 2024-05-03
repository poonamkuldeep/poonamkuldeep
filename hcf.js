const input = require("readline-sync")
let a = input.questionInt("enter the numbet;")
let b = input.questionInt("enter the numbet;")
    // p = a*b;
while(a%b!=0)
{
   var q = a%b;
    a = b;
   b = q;
   
}
     console.log(b)