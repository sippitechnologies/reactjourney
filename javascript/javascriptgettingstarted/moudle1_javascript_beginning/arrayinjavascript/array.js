/*
Learning Objective
    Create and Initialize an Array
    Get Element of Array
    Manipulating Array
    slice and splice
    Array Searching and looping
    Arrays in DOM
*/
//Creating and Initializing an Array
let values = [1,2,3,4]
console.log(values);
let values1  =Array.of("A","B","C","D");
console.log(values1);
//Checking is given object is Array
if(Array.isArray(values))
{
    console.log("I am an Array");
}
//get the Elements of Array
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);
console.log(values[5]);


//Manipulation Array
//Adding New Element 
values.push(5);
console.log(values);
//Removing Array Element last Element
let lastValue = values.pop();
console.log(lastValue);
console.log(values);
//Get First value of Array and Shifting Array Element towards left
let first = values.shift();
console.log(first);
console.log(values);
//Adding Element at first index of Array without shifting
values.unshift(10);
values.unshift(24,30);
console.log(values);
//Slice and Splice
let newValues = values.slice(2,5);
console.log(newValues);

values.splice(1,1);
console.log(values);
//
values.splice(1,0,50);
console.log(values);
values.splice(1,1,60);
console.log(values);
//Sorting and Looping
let values2 = ['A','B','C','D','E',"Good","Healthy"];
console.log(values2.indexOf('A'));
console.log(values2.indexOf('B'));
console.log(values2.indexOf('P')); //-1
//Filter value and Get another Array
let set = values2.filter(function(item){
    return item>'D';
});
console.log(set);
let result = values2.find(function(item){
    return item.length>4;
});
console.log(`Result=${result}`);

//For Eeach Value
values.forEach(function(item){
    console.log(item);
});
//Array in DOM
