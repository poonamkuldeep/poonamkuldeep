// const input=require("readline-sync")
// let n=input.questionInt("enter the number")
// let i=2
// while(i<n)
// {
//     if(n%i==0)
//    {
//      console.log("not prime number")
//      i=i+1;
//      break;
//     }
//     else
//     {
//         i=i+1;
//     }
//     if(i==n)
//     {
//         console.log("prime number")
//     }
// }


const input=require("readline-sync")
let n=input.questionInt("enter the number")
let i=1;
let p=1;
var r;
while(i<=n)
{
  r=n%i;
  if(r==0)
  {
    p=p*i;
  }
  i++;
}
  if(p==n)
  {
  console.log("prime number")
  }
  else
  {
    console.log("not prime number")
  }
