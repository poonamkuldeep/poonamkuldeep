const input=require("readline-sync")
let n=input.questionInt("number:=")
let i=0;
let arr=[];
let j=0;
let p=1;
while(i<n)
{
    arr[i]=input.questionInt("number:=")
    i++;
}console.log(arr)

while(j<n)
{
    if(arr[j]<0)
    {
        p=p*arr[j];
    } j++;  
} console.log(p)