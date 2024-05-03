
// var a=int.questionInt("enter:")
// for (var i=0; i<3; i++)
// {
//     console.log(i*10);
// }
// var a=int.questionInt("enter:")
// for(i=1; i<=10; i++)
// {
// //     console.log(i*2);
//     for(j=0; j<=i; j++)
//     console.log(j+i)
// }


// const int=require("readline-sync")
// let n = int.questionInt("entrer the number")
// let i=0;
// let arr=[];
// while(i<n){
//    arr[i]=[]
//     var j=0;
//     while(j<n){
//         arr[i][j]=int.questionInt("enter the number")
//         j++;
//     }
//     i++;   
// }
//   console.log(arr)
 
// let p=0;
// let arr1=[];
// while(p<n){
//    arr1[p]=[]
//     var t=0;
//     while(t<n){
//         arr1[p][t]=int.questionInt("enter the number")
//         t++;
//     }
//     p++;   
// }
//   console.log(arr1)
  
//   let arr2 = [];

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         arr2.push(arr[i][j] - arr1[i][j]);
//     }
// }
// console.log(arr2)

// const input=require("readline-sync")
// let n = input.questionInr


// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5 - i; j++) {
//         process.stdout.write(" ");
//     }
//     for (var k = 0; k <= i; k++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }

// let n = 5;
// let arr1 = [4,2,3,5,6];
// let arr2 = [4,2,3,5,6];
// let i = 0;

// while (i < n) {
//     let j = 0;
//     while (j < n) {
//         if (i!=j){
//             arr2[i] = arr2[i] + arr1[j];
//         }
//         j = j + 1;;
//     }
//     console.log(arr2[3]);
//     i = i + 1;
// }

// let a = 0, b = 1;
// for (let i = 0; i < 10; i++) {
//     console.log(a);
//     let temp = a;
//     a = b;
//     b = temp + b;
// }

// const input = require("readline-sync")
// let n = input.questionInt("enter value")
// let n1 = input.questionInt("enter value")
// var gcd = 0;
// for(let i = 0; n>= i || n1>=i; i++);{
//     (n%i==0) || (n1%i==0)
//      gcd=i
//     {
//         console.log(n,n1)
//     }
    
// }

// const input=require("readline-sync");
// let n=input.questionInt("enter length of array")
// let a=[],a1=[];
//  i=0,j=0,p=0,k=0;
// while(i<n)
// {
//    a[i]= input.questionInt("enter the value");
//     i++;
// }
// j=0;
// while(j<n)
// {
//     a1[j]=a[n-1-j];
//     j++;
// }
// console.log(a,a1)
// while(p<n)
// {
//     a[p]!==a1[p]
//     {
//         k++;
//         break;
//     }p++;
      
//     if(k==0)
//  {
//         console.log("palindrom")
// }
//     else
//  {
//         console.log("not palindrome")
//  }


// }


// const input=require("readline-sync");
// let n=input.questionInt("enter length of array")
// let a=[],a1=[];
//  i=0,j=0,p=0,k=0;
// while(i<n)
// {
//    a[i]= input.questionInt("enter the value");
//     i++;
// }
// j=0;
// while(j<n)
// {
//     a1[j]=a[n-1-j];
//     j++;
// }
// console.log(a,a1)
// while(p<n)
// {
//     a[p]=a1[p]
//     {
//       k++;
//       break;
//     }
//     p++
// }

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[]
// for (let i=0;i<arr1;i++){
//     arr3.push(arr1[i])
// }
// for (let i=0;i<arr2;i++){
// arr3.push(arr2[i])
// }

// const input=require("readline-sync")
// n=input.questionInt("length of array");
// let arr=[];
// let i=0;
// while(i<n){
//     arr[i]=input.questionInt("number")
//     i++;
    
// }
// let j=0
// let arr1=[]
// while(j<n){
//     arr1[j]=arr[i-1-j];
//     j++
// }

// let p=0
// let k=0;
// while(arr[k]!=arr1[k]){
//     p++;
//     break;
// }
// k++

// if(p==0){
//     console.log("palindrom")
// }else{
// console.log("not palindrome")}

// let a = input.questionInt("enter the number ")
// let b = input.questionInt("enter the number")
// let c = input.questionInt("enter the number")


// const input=require("readline-sync");
// let n=input.questionInt("enter the number")
// let arr=[];
// let i=0;
// // let c=0;
// while(i<n)
// {
//  let a =input.questionInt("number:_")
//     arr[i]=a;
//     i++;
//    // i=0;
//     // while(i<n)

//     // 
//     // i++
// }console.log(arr);

// let s=0;
// let e=n-1;
// let key = input.questionInt("number")
// let found=-1;
// let mid;
// while(s<e)
// {
//     mid= Math.floor((s+e/2));
//     // console.log(mid)

//     if (arr[mid]==key){
//       found=arr[mid];
//       break;
//     }
//     else if(arr[mid]>key){
//         e=mid-1;
//     }else{
//         s=mid+1;
//     }
    // console.log()

// }  if (found!==-1) {
//     console.log(key,"found");
    
// }else{
//     console.log(key,"not found");

// }

//     if(key<mid)
//    {
//      s=mid+1;
//      console.log(key)
//    }else
//    {
//      e=mid-1;
//      console.log(key)
//    }
//    i++;
// }

// const input=require("readline-sync")
// let n = input.questionInt ("length of array:=")
// let i=0;
// let sum=0;
// let sum1=0;
// let array=[];
// while(i<n)
// {
//  let a =input.questionInt("number:_")
//     array[i]=a;
//     i++;
// }
//     i=0;
//     while(i<n)
// {
//     console.log(array[i]);
//     i++
// }
//     if(array[i]>0)
//     {
//      sum=sum+array[i];
//      console.log(sum);
//     }else
//     {
//         sum1=sum1+array[i];
//         console.log(sum1);
//     }i++;

// let arr = [7, 3, 5, 2, 8];
// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = key;
// }
// console.log(arr);

// let base = 2;
// let exponent = 5;
// let result = 1;
// for (let i = 0; i < exponent; i++) {
//     result *= base;
// }
// console.log(result);

// let str = "hello";
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }
// console.log(reversed);


// let sum = 0;
// for (let i = 2; i <= 10; i += 2) {
//     sum += i ** 2;
// }
// console.log(sum);

// const input = require("readline-sync")
// let n = input.questionInt("number:=")
// let i=0;
// let oddsum=0;
// let evensum=0;
// while(i<n)
// {
//     if (n%i!==0)
//     {
//      oddsum+= i;
//     }
//     {
//         evensum+= i;
//     }i++
// }console.log(oddsum)
// console.log(evensum)

// const input=require("readline-sync");
// let n = input.questionInt("enter the length of array")
// let array1 = [];
// let array2 = [];
// let array3 = [];
// let i=0;
// while(i<n)
// {
//     array1[i] = input.questionInt("enter the number")
//     i++;
// }
// console.log(array1);
//    let j=0;
//    let m = input.questionInt("enter the length of array")
// while(j<m)
// {
//     array2[j] = input.questionInt("enter the numbber")
//     j++;
// }
// console.log(array2);


//     let arr=array1.concat(array2);
// //    arr.sort();
//    console.log(arr)

// let x = nan;
// let y = "23";
// let z = x *y; 


// console.log(z)

///////////////////////////////////////////////binary search

// const input=require("readline-sync")
// let n = input.questionInt("enter the size of array:=")
// let k = input.questionInt("key value:=")
// array=[]
// let i=0;
// let l=0
// let r=n
// let result="no";

// while (i<n) {
//     a =input.questionInt("enter the number: ") 
//     array[i] = a
//     i++;
// }
// while (l<=r) {
//     i=Math.floor((l+r)/2 )
//     if(array[i]==k){
//         result="yes";
//         break;
//     }
//     else if(array[i]<k){
       
//         l=i+1;
//     }else
//      r=i-1;
// } 
// console.log(result);

let myNumber = 2;

while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
  console.log(myNumber)