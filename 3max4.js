const input=require("readline-sync");
let a=input.questionInt("enter the number")
let b=input.questionInt("enter the number")
let c=input.questionInt("enter the number")
let d=input.questionInt("enter the number")
if(a>b)
{max=a;min=b;}else{max=b;min=a;}
if(c>d)
{max1=c;min1=d;}else{max1=d;min1=c;}
if(max>max1)
{max2=max;min2=max1;}else{max2=max1;min2=max;}
if(min>min1)
{max3=min;min3=min1;}else{max3=min1;min3=min;}
if(max3>min2)
{max4=max3;min4=min2;}else{max4=min2;min4=max3;}
if(min4>min3)
{console.log(min4);}else{console.log(min3);}