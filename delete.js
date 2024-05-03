
const input = require("readline-sync")
let n = input.questionInt("enter the length of array")
let m = input.questionInt("enter the element to remove")
let i = 0;
let a = [];
let b = [];
while(i<n)
{
    a[i]=input.questionInt("enter the element")
    i++;
}
 let j = 0;
 i=0;
 while(i<n)
 {
    if(a[i]==b[m])
    var k=0;
   while(k<n)
   {
    a[k]=a[k+1];
    k++;
   }
   n--;
   i++;
 }i++;
 {
    let i=0;
    while(i<n)
    {
        console.log(a[i]);
        i++;
    }
 }


// let n = input.questionInt("enter the no.")
// // function Rotate_and_Print(arr,d,n)
//  {
// var temp=new Array(n);
//      d=d%n;
//     let k = 0;
//     for (let i = d; i < n; i++) {
//         temp[k] = arr[i];
//         k++;
//     }
//     for (let i = 0; i < d; i++) {
//         temp[k] = arr[i];
//         k++;
//     }

//     for (let i = 0; i < n; i++) {
//         console.log(temp[i]+" ");
//     }
//  }
 


