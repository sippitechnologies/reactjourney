let price=20;
showOutput(price);
showOutput(typeof price);
let myname = "Deepak";
showOutput(myname);
showOutput(typeof myname);
let isAdult =true;
showOutput(isAdult);
showOutput(typeof isAdult);
let isCharacter = 'a';
showOutput(isCharacter)
showOutput(typeof isCharacter);
let floatValue= 10.5;
showOutput(floatValue)
showOutput(typeof floatValue);

function showOutput(message)
{
    console.log(message);
}

//Arthimatic Operations

let a=30;
let b=10;

//Artimatic Operations
//Addition
showOutput(`Addition of a+b=${a+b}`);
//Multiply
showOutput(`Multiplication of a*b=${a*b}`);
//Division
showOutput(`Division of a/b=${a/b}`);
//Minus
showOutput(`Minus of a-b=${a-b}`);
//Mode
showOutput(`Modulus of a%b=${a%b}`);
//Relational Operator
//Equal
showOutput(`Is  a Equal to b=${a==b}`);
//Not Equal
showOutput(`Is  a  Not Equal to b=${a!=b}`);
//Greater Than
showOutput(`Is a Greater Than b=${a>b}`);
//Less Than
showOutput(`Is a less than b=${a<b}`);
//Greater Than or Equal To
showOutput(`Is a Greater than or equal ot b=${a>=b}`);
//Less Than or Equal To
showOutput(`Is a Less than or equal to=b=${a<=b}`);

//Logical Operator
//And Operator
let result1 = a>b && a==20;
showOutput(`Result1=${result1}`);
let result2 = a>b && a==10;
showOutput(`Result2=${result2}`);
//OR Opeator
let result3 = a>b || a==20;
showOutput(`Result3=${result3}`);
let result4 = a>b || a==10;
showOutput(`Result4=${result4}`);

//Increment Opeator
//Pre Increment
let result5= ++a;
showOutput(`Result5=${result5}`);
//Post Increment
let result6= a++;
showOutput(`Result6=${result6}`);
//Pre Decerement
let result7= a--;
showOutput(`Result7=${result7}`);
//Post Decrement

//Assigment Operator
a=a+10;
showOutput(a);
a+=10;
showOutput(a);

a*=10;
showOutput(`Result7=${result7}`);
