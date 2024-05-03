const input=require("readline-sync");
let n = input.questionInt("enter the length of array")
let array1 = [];
let array2 = [];
let array3 = [];
let i=0;
while(i<n)
{
    array1[i] = input.questionInt("enter the number")
    i++;
}
console.log(array1);
   let j=0;
   let m = input.questionInt("enter the length of array")
while(j<m)
{
    array2[j] = input.questionInt("enter the numbber")
    j++;
}
console.log(array2);


    let arr=array1.concat(array2);
   arr.sort();
   console.log(arr)
      
   

