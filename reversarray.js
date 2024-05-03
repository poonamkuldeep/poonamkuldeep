const input=require("readline-sync");
let n=input.questionInt("enter length of array")
let array=[],
 i=0;
while(i<n)
{
   array[i]= input.questionInt();

    i++;
}
 n=n-1;
 i=n;
 while(i>=0)
 {
    console.log(array[i]),i--
 }

// ye tushar ka code hai.
// for (var i=0; i<n; i++)
// {
//    array[i]=input.questionInt((i+1)+" element:");
// }
// i--;
// var j=0;
// while (i>=0)
// {
//    b[j]=array[i],i--,j++;
// }
// console.log(b)