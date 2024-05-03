const input=require("readline-sync");
let n = input.questionInt("enter the length of array")
let array = [];
let i=0;
str="";
while(i<n)
{
  array[i] = input.questionInt("enter the number;")
  i++;
}
console.log(array);

 for(let i=0;i<n;i++){
  for(let j=0;j<array[i];j++){
    str+=">";
  }
  str+="\n";
 }
 console.log(str);
