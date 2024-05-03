const int=require("readline-sync")
let n = int.questionInt("entrer the number")
let i=0;
let arr=[];
while(i<n){
   arr[i]=[]
    var j=0;
    while(j<n){
        arr[i][j]=int.questionInt("enter the number")
        j++;
    }
    i++;   
}
  console.log(arr)
 
let p=0;
let arr1=[];
while(p<n){
   arr1[p]=[]
    var t=0;
    while(t<n){
        arr1[p][t]=int.questionInt("enter the number")
        t++;
    }
    p++;   
}
  console.log(arr1)
  
  let arr2 = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr2.push(arr[i][j] + arr1[i][j]);
    }
}
console.log(arr2)