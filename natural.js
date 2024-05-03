const input=require("readline-sync");
let n=input.questionInt("enter length of array")
let array=[]
 i = 0;
p=1;
while(i<n)
{
    array[i] = p;
    i=i+1;
    p=p+1;
}
console.log(array);



