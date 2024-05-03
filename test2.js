const input=require("readline-sync")
let hours=input.questionInt("timing")
if (hours<=2)
{
    total=hours*30;
}
  else if(hours<=5)
  {
    first = 2;
    extra = first*25;
    time = hours-first;
    off = time*20;
    total = extra+off;
  }
  else 
  {
    first = 2;
    extra = first*25;
    time = 3;
    off = time*20;
    fee = first+time;
    fee1 = hours-fee;
    fee2 = fee1*15;
    total = extra+off+fee2;
  }
    console.log(" parking fee accordingly hours=",total)