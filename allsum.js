// const input = require("readline-sync")
// let n = input.questionInt("enter the length of array")
// let a=[];
// let i= 0;
// sum=0;
// while (i<n)
// {

//    a[i]= input.questionInt("enter the element:");
//     sum=sum+a[i]
//    i++;
// // }
//    console.log(sum)




// const input = require("readline-sync")
// let n = input.questionInt("enter the length of array")
// let i=0,place=0,num=0
// let a = []
// while(i<n)
// {
//     a[i] = input.questionInt("enter the element")
//     i++;
// }
// let j=n-1;
// while(j>=place)
// {
//     a[i] = a[i+1];
//     i--;
// }
// if(a[i+1]==num)
// while(i<n+1)
// {
//     console.log(a[i])
//     i++;
// }
let array = [1, 2, 3, 4, 5];
let steps = 2;
for (let i = 0; i < steps; i++) {
    let lastElement = array.pop();
    array(lastElement);
}
console.log("Rotated array:", array);