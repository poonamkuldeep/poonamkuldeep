const input = require("readline-sync")
// let n = input.questionInt("enter length")
// let i=0;
// let j=0;
// let arr=[];
// let arr1=[];
// let sum=0;
// while(i<n)
// {
//     arr[i] = input.questionInt("values:=")
//     i++;
// }
//    { console.log(arr)} 

// while(j<n)
// {
//     arr1[j] = input.questionInt("values:=")
//     j++;
// }
//  {console.log(arr1)} 
  
// for( let i=0; i<n; i++){
//   for(let j=0; j<n; j++){

//     if(arr[i] == arr1[j]){

//         sum = sum+arr1[j]
//     }
//   }
//       console.log("common numbers sum=",sum)
// }

let hours = input.questionInt("timing")
let x = input.questionInt("for first 1 hours")
let y = input.questionInt(" every extra hour after the first hour")
let z = input.questionInt("total parking hours")

if(hours<=x)
{
    total=hours*x;
}
else if(hours<=y)
{
    first = x;
    extra = first*y;
    time = hours-first;
    off = time*z;
    total = extra+off;
}
 console.log(TOTAL)
