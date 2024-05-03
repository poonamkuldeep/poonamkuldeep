// let a=5;
// let b= "10"
// z=a+b;
// console.log(z)

//  ................................................sum and power add    
// const input = require("readline-sync")
// let n = input.questionInt("enter the number")
// let sum =0;
// let sum1=0;
// let i = 1;
// while(i<=n)
// {
//     if(i%2==0){
//     sum=sum + i**2;
//     console.log(sum)
//     }
//     else{
//     sum1=sum1+i**3;
//     console.log(sum1)
//     }
// i++;
// }
// let sum2=sum+sum1;
// console.log(sum2);

// ...i...................dryrun......................................dryrun
// for(i=0; i<5; i++){
//     for(j=1; j<3; j++){
//         if(j==3){
//             break;
//         }
//         console.log(j);
//     }
// }

// .................................i.........iunion intersection
// const input = require("readline-sync")
// let n = input.questionInt("lenght:=")
// let m = input.questionInt("lenght:=")
// let i=0;j=0;
// let arr=[]
// let union=[]; section=[];
// let u=0; k=m+n;
// while(i<n)
// {
//     arr[i]=input.questionInt("number:-")
//     i++;
// }
// console.log(arr)

//      while(j<m)
//    {
//       arr1[j]=input.questionInt("number:=")
//       j++;
//    }
//    console.log(arr1)

//  while(arr[i]>arr[j])
//  {
//     console.log(arr[i])
//  }

// ...............................................................test question
// const input = require("readline-sync");
// let a = input.questionInt("Enter first number: ");
// let b = input.questionInt("Enter second number: ");
// let c = input.questionInt("Enter third number: ");

// if (a === b && b === c) {
//     console.log("All numbers are equal");
// } else if (a === b || a === c || b === c) {
//     console.log("Two numbers are equal");
// } else {
//     console.log("All numbers are different");
// }

// if (a > b && a > c) {
//     if (a % 2 === 0) {
//         console.log(a + " is the largest even number");
//     } else {
//         console.log(a + " is the largest odd number");
//     }
// } else if (b > a && b > c) {
//     if (b % 2 === 0) {
//         console.log(b + " is the largest even number");
//     } else {
//         console.log(b + " is the largest odd number");
//     }
// } else if (c > a && c > b) {
//     if (c % 2 === 0) {
//         console.log(c + " is the largest even number");
//     } else {
//         console.log(c + " is the largest odd number");
//     }
// }


// ................................................sum of possitive and negative number

// const input = require("readline-sync")
// let m = input.questionInt("enter lenght:=")
// let even = 0 ;
// let odd = 0;
// let pro = 1 ;
// let sum = 0;
// let i = 0;
// let arr = [];
// while(i<m)
// {
//     arr[i] = input.questionInt("number:=");
//     if (arr[i] != 0)
//     {
//        if(arr[i]>0)
//        {
//         sum = sum+arr[i];
//        }else
//        {
//          pro = pro*arr[i];
//        }
         
//        if(arr[i]%2==0)
//        {
//          even = even+1;
//        }else
//        {
//         odd = odd+1;
//        }}
//          i++;
// }
// let j=0;

// while (j<m)
// {
//     if (arr[j] != 0)
//     {
//        if(arr[j]>0)
//        {
//         sum = sum+arr[j];
//        }else
//        {
//          pro = pro*arr[j];
//        }
         
//        if(arr[j]%2==0)
//        {
//          pos = pos+1;
//        }else
//        {
//         neg = neg+1;
//        }}
//          j++;
// }
  // console.log("sum of possitive =", sum)
  // console.log("product of negative =","-",pro)
  // console.log("count even =",even)
  // console.log("count odd =",odd)


// const input = require("readline-sync")
// let n = input.questionInt("lenght of array")
// let i = 0;
// let sum=0;
// let j=0;
// let arr=[],arr1=[];
// let p=0;
// while(i<n)
// {
//   arr[i]=input.questionInt("number")
//    i++;
// }
//   //  console.log(arr)
//   while(p<n)
//   {
//     arr1[p]=arr[i]
//     p++;
//   }console.log(arr1)


///////////////////////////////////////////////////=binary search
// const input=require("readline-sync")
// let n = input.questionInt("enter the size of array")
// let k = input.questionInt("enter the size of array")
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


// ...................rotation..........

// const input = require("readline-sync")
// let n = input.questionInt("length of array")
// let arr = [];
// let arr1=[]; 
// let i = 0;
// let j=0;
// while(i<n)
// {
//   arr[i] = input.questionInt("enter number")
//   i++;
// }
     
  //  i=0;
  //  let p = input.questionInt("rotation no.")
   
  //  while(j<n)
  //  {
  //      arr1[j] = arr[i];
  //       p = p+1;
  //      j++;
  //  }
  //    console.log(arr1)
   


  ////////////////////////////////////////////////

  const input = require("readline-sync")
  let n = input.questionInt("lenght")
  let m = input.questionInt("enter values")
  let i = 0;
  let j = 0;
  let multiple = 3;
  let arr = []
  let arr1 = []
  while(i<n)
  {
    arr[i] = input.questionInt("number")
    i++;
  }
    while(i<m)
    {
      arr1[j] = input.questionInt("number")
      j++;
    }
       
    while(i>j)
    {
      if(i>0)
      {var p = arr[i]**multiple;
      i++;}

      else{
        var p1 = arr1[j]*multiple;
      }

    }
       console.log(p,p1)