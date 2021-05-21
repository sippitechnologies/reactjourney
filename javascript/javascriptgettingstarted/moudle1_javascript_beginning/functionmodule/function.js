function helloWorld()
{
    console.log("Hello World");
}
helloWorld();

//Passing value to function
function addition(a,b)
{
    showOutput(a+b);
}
function showOutput(message)
{
    console.log(message);
}

addition(10,20);

//Function with Return Type
function sumOfTwoNumber(a,b)
{
    return a+b;
}
//Function Expression
let sum= sumOfTwoNumber(40,89);
showOutput(sum);


/*
    Here function name is optional and you can't use this name to call this method
*/
let addition1= function addtionOfTwoNumber(a,b)
{
    return a+b;
}
showOutput(`Addition=${addition1(10,30)}`);

/*Scope of Function
        variable declare inside method is only available to inside the body of mehtod
        or subfunction of method.
        We method is done with execuation it no more exist
        Not available for outside word
*/

function checkScope()
{
    let message = "Testing";
    showOutput(message);
}
//showOutput(message);
let key=42;
function getSecret(value)
{
    let keyGenerator=function ()
    {
        let key = 10;
        showOutput(key);
        return key;
    }
    showOutput(`Key value outside of Key Generator=${key}`);
    return value*keyGenerator();

    

}
let scret= getSecret(10);
showOutput(`Scret Value is :${scret}`);

