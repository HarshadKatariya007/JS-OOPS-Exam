class Calculator
{
  constructor(a,b)
  {
    this.a=a;
    this.b=b;
  }
  Add()
  {
       console.log(`${this.a+this.b} Add`);
  }
  Sub()
  {
    console.log(`${this.a-this.b} Sub`);
  }
  Multi()
  {
    console.log(`${this.a*this.b} Multi`);
  }
  Divide()
  {
    console.log(`${this.a/this.b} Divide`);
  }
}

class Second extends Calculator
{
    constructor(a,b,c)
    {
        super(a,b);
        this.c=c;
    }

    Add()
    {
         console.log(`${this.a+this.b+this.c} Add`);
    }
    Sub()
    {
      console.log(`${this.a-this.b-this.c} Sub`);
    }
    Multi()
    {
      console.log(`${this.a*this.b*this.c} Multi`);
    }
    Divide()
    {
      console.log(`${this.a/this.b/this.c} Divide`);
    }
}
let arry_sum=0;
class Arry
{
   
    constructor(arry)
    {
        this.arry=arry;
    }
    Add()
    {
        for(let i=0;i<this.arry.length;i++)
        {
           arry_sum=arry_sum+this.arry[i];
           console.log(arry_sum);
        }
    }
}

/* 2 Value */

let sum=new Calculator(2,2);
let sub=new Calculator(10,4);
let multi= new Calculator(5,5);
let divide = new Calculator(10,4);
sum.Add();
sub.Sub();
multi.Multi();
divide.Divide();

/* 3 Value */

let sum_2 =new Second(2,2,2);
let sub_2 =new Second(5,4,9);
let multi_2 = new Second(5,5,5);
let devide_2= new Second(2,2,2);
sum_2.Add();
sub_2.Sub();
multi_2.Multi();
devide_2.Divide();

/* Array Sum / Multi */
let arry_1 = new Arry([1,2,3,4,5]);
arry_1.Add();
