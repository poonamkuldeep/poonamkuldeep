// const input=require("readline-sync")
// let n=input.questionInt("enter the number")
// let i=0
// while(i<=n)
// {
//     console.log(i)
//     i=i+2;
// }

const input=require("readline-sync");
let n=input.questionInt("enter the size of array : ");
let arr=[];
let i=0;
while(i<n){
    arr[i]=input.questionInt(`enter the ${i+1} element : `)
    i++;
}
let arr1=[];
let count=1;
for(let i=0; i<n; i++){

    for(let p=i+1; p<n; p++){
        if(arr[i]==arr[p]){
                arr1.push(arr[p]);
        }else[

        ]
    }
}
console.log(arr1);