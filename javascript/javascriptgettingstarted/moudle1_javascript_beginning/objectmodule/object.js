/*
Learning Objective of this module
Object property and methods
Passing Objects to functions
Standard Build in objects
The Document Object Model(DOM)
Sytling DOM Elements
Detecting Button Click
Showing and Hidding Dom Elements



*/


//Simple Object 

let person = {
    fname:"Deepak",
    lname:"Kumar",
    age:37,
    doWork()
    {
        return `First Name:${this.fname} Last Name:${this.lname} Age:${this.age}`;
    }
};

let symbol = Symbol();
let person1={
    fname:"Deepak",
    lastname:"kumar",
    age:"20",
    [symbol]:"Scret Information"
};

showOutput("Friends");
showOutput(person.fname);
showOutput(person.lname);
showOutput(person.age);
showOutput(person.doWork());
showOutput(person['fname']);
showOutput(person['lname']);
showOutput(person['age']);

//Passing Object as Parameter

//Pass by Value 
let message = "Hello World";
function printMessage(message)
{
    message="10";

}

//Pass by Reference
function printPerson(person)
{
    person.age=45;
}

//Standard Objects
//Link of Standard Object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
//Date Example
let currentDate = new Date();
showOutput(currentDate.toDateString());
//String Example
let hello="Hello World";
showOutput(hello.charAt(0));

//Math Example
showOutput(Math.abs(-43));
showOutput(Math.random());

//Number Example
let nubmerTesting = 1.1+2.5;
showOutput(typeof nubmerTesting);
showOutput(nubmerTesting.toFixed(1));


//DOM
//DOM Link https://developer.mozilla.org/en-US/docs/Web/API/Element

//Dom Styling Elements
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
printMessage();
printPerson(person);
showOutput(message);
showOutput(`Person Age:${person.age}`);

changeColor('red');
changeFont('100');
attachButtonListener();

//OnClick Event




