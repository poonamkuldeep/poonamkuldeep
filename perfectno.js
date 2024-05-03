const input=require("readline-sync");
let n = input.questionInt("enter the number");
sum=0;
i = 1;
while(i<n)
{
  if(n%i==0) 
  {
   sum=sum+i;
  i=i+1;
  }
  else
  {
   i++;
  }
}
if(sum==n)
{
   console.log("perfect number");
}
else{
   console.log("not perfect number");

}