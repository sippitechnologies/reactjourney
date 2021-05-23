/*
Objective of This Module
1. Global Scope
2. Local Scope
3. var and hoisting
4. undeclared variable
5. Solution of undeclared problem

*/
//Global Scope
let number= 1000;
function printNumber()
{
    let number = 2000;
    console.log(number);
}
printNumber();
console.log(number);

//Block or Local Scope
function test()
{
    let a=10;
    console.log(a);
}
//console.log(a);//Give Error Undefined Symbol
test();
//

hoisting1="Good Morning";
//var and hoisting
function testingHoisting()
{
    let test = `${hoisting1}`;
    console.log(test);
}
testingHoisting();
var hoisting1="I am Hositing Problem";


hoistingTest();
function hoistingTest()
{
        console.log("Test Passed");
}
