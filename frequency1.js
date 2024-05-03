const input=require("readline-sync");
let n = input.questionInt("enter the length of array")
let array = [];
let i=0;
while(i<n)
{
    array[i] = input.questionInt("enter the number")
    i++;
}  
// {
  // console.log(array[i])
  // i++
// }
    i=0;
    while(i<n)
  {
    let j=i+1;
    p=1;
    while(j<n)
    {
      if(array[i]==array[j])
      {
        p=p+1;
        k=j;
        while(k<n-1)
        {
          array[k]=array[k+1]
          k=k+1;
        }
        n=n-1;
      }
      else
      {
        j++
      }
    }
     console.log(array[i]+"_"+p)
     i=i+1;
  }
    

