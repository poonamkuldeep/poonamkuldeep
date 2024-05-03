const input=require("readline-sync")
let n=input.questionInt("enter length")
let i=0;
let j=0;
let sum=0;
// average=0;
let arr=[];
while(i<n){
    arr[i]=input.questionInt("number:=")
    i++;
} console.log(arr)

   while(j<n)
   {
    sum=sum+arr[j]
    j++;
   }
   console.log(sum/n)