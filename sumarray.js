const input=require("readline-sync");
let n = input.questionInt("enter the length of array")
let array = [];
let i=0;
let count=0;
let bount=0;
let sum=0; 
let gum=0;
while(i<n)
{
   array[i]= input.questionInt("enter the element:");

// if(array[i]%2==0)
if(array[i]>0)
{
  count=count+1;
  sum = sum+array[i];

}
else
{ 
   bount=bount+1;
   gum= gum + array[i]
}
i++;
}
console.log(sum,count);
console.log(gum,bount);