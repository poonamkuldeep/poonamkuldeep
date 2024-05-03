const input=require("readline-sync");
let n = input.questionInt("enter the length of array")
let p = input.questionInt("enter the number")
let array = [];
let i=0;
count=0;
while(i<n)
{
   array[i]= input.questionInt();
    i++;
}
console.log(array)
//  i=0;
 while(i<n)
 {
    if (array[i]==p)
    count=count+1;
    i++
 }
    if(count==0)
    {
        console.log("notexit")
    }
    else
    {
        console.log("exit")
    }