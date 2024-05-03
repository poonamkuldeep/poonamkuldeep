const input=require("readline-sync");
let a = input.questionInt("enter the number");
if(a<=10000)
{
    h=a*20/100;
    d=a*80/100;
    t=a+h+d;
    console.log(t);
}
else
{
    if(a<=20000)
    {
      h=a*25/100;
      d=a*90/100;
      t=a+h+d;
      console.log(t);
    }
    else
    {
      h=a*30/100;
      d=a*95/100;
      t=a+h+d;
    }
}

