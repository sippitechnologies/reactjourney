let a=10;
let b=20;
if(a>b)
{
    showOutput(`A is Greater=${a}`);
}
else
{
    showOutput(`B is Greater=${b}`);
}
//For Loop
for(let i=0;i<10;i++)
{
    showOutput(i);
}
//While Loop
let t=11;
while(t<=20)
{
    showOutput(t);
    t++;
}
//Do While loop
let j=31;
do
{

    showOutput(j);
    j++;
}
while(j<=40);

//Falsy in JavaScript
let zero=0;
if(zero)
{
showOutput("I am Zero Nubmer");
}
else
{
    showOutput("Zero is falsy ");
}
let emptyString = "";
if(emptyString)
{
    showOutput("I am Empty Nubmer");
}
else{
    showOutput("Empty String is Falsy");
}
let test;
if(test)
{
 showOutput("I am Undefined");
}
else{
    showOutput("Undefined is falsy");
}

let numberTest=NaN;
if(numberTest)
{
    showOutput("I am Number");
}
else
{
    showOutput("Nan is falsy");
}
//Conditional Operator
let result = (a>b)? "A is Greater" : "B is Greater"
showOutput(result);

let plus = 1.1+1.3;
showOutput(plus);
 //== and === Operator

 if(+(plus.toFixed(2))===2.4)
 {
     showOutput("Both Value are equal");
 }
 if((plus.toFixed(1))===2.4)
 {
     showOutput(plus.toFixed(1));
     showOutput("Both Value are equal");
 }
if(1=="1")
{
    showOutput("We are equal");
}
if(!(1==="1"))
{
    showOutput("We are not equal");
}
function showOutput(message)
{
    console.log(message);
}