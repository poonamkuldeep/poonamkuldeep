const input=require("readline-sync")
let n = input.questionInt("length")
let i=0;
let j=0;
var p ; 
let arr=[];
arr2 = [];
while(i<n)
{
    arr[i]=input.questionInt("value:=")
    i++;
}
console.log(arr)
let k=0;
  while(j<n)
  {
   if(arr[j]%2!==0)
   {
     arr2[k]=arr[j];
     k++;
    // console.log(arr[j])
   }
   j++;
  }
  console.log(arr2);