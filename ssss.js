const input=require("readline-sync")
let n = input.questionInt("length")
let i=0;
let sum=0;
product=0;
let arr=[]
while(i<n)
{
    arr[i]=input.questionInt("number:=")
    i++;
}
while(i<n)
{
    console.log(arr[i])
}

{
    if(arr[i]>0)
    {
        sum=sum+arr[i];
        console.log(sum)
    }
    else{ 
        product=product*arr[i];
        console.log(product)
    }
    i++;
}
count=0;
while(arr[i]%2==0)
{
    count=count+1;
    console.log(count)
}
  count=count+1;
  console.log(count)
  i++;