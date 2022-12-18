//basic functions-No Input, No Return
function myFirstFunction() {//CamelCaseName for mostly languages. 
    console.log("Hello World from Function!!!!!")
}
//Calling/Invoking a function
myFirstFunction();

//Function with Inputs
function myFirstFunctionWithInput(message) {
    console.log("Hello ", message);
}
myFirstFunctionWithInput("Test");

//Function with Multiple Input
function myFistFunctionWithMultipleInputs(value1, value2) {
    console.log("Hello", value1, value2);
}

myFistFunctionWithMultipleInputs("value 1", "value 2");

//take input from prompt and print it
// function inputFromPrompt(){
//     let input=prompt("Enter any thing you like");
//     console.log("Printing from Prompt",input);
// }
// inputFromPrompt();


//Default Parameters
function myFunction(x, y = 100) {
    console.log(Number(x) * Number(y));
}
myFunction(10, 5);


//Functions returning a value
function addNumber(number1 = 0, number2 = 0) {
    return number1 + number2;//Returns the sum of the input1 and input2
}

let retVal = addNumber(10, 100);
console.log(retVal)
//Arrow Functions 
//Unammed, No Parameter function with no return value
let doSomethig = () => console.log("I am an arrow/inline/lambda function");
doSomethig();

//Arror Function with 2 params and a return value
let variable = (value1, value2) => {
    console.log("Hello");
    return value1 + value2;
}
console.log(variable(100, 21));

//Using arrow function with builtin functions
const array = ["abc", "123", "car", 123]
array.forEach(e => console.log(e));

//Spread Operator
let spread = [1, 3, 4, 5, 6];
let arr = ["x", "y", ...spread]
console.log(arr);

//Rest Operator
function restParamFunction(value1, ...value2) {
    console.log(value1, value2);
}
restParamFunction("Single Param1", "Param2", "Param3");

//Here is how to define it:
(function () {
    console.log("IIFE!");
})();

function getRecursive(nr) {
    //console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
    console.log(nr)
    return nr;
}
console.log(getRecursive(3));


function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
        console.log(x + 7);        
        console.log("I can access outer variables:", nr);
    }    
}

doOuterFunctionStuff(2);


//callback
//Create an function call back
let callbackFunction = function () {
    console.log("in call back function");
    let x = 10;    
    
    // setTimeout(() => {
    //     for (i = 0; i < 30; i++) {
    //         console.log("intimeout");
    //     }
    // }, x); 
    // setInterval(() => {
    //     for (i = 0; i < 30; i++) {
    //         console.log("ininterval");
    //     }
    // }, x); 
}
//created a function that take a callback
function testCallBackFunction(callbackFunction) {
    callbackFunction();//call the callaback function
    console.log("in master function");//normal execution
}

testCallBackFunction(callbackFunction);

function outerFunction(){
let callbackFunction2 = function () {
    console.log("in call back function");
    let x = 10; 
    console.log(x);
}
testCallBackFunction(callbackFunction2);
}
outerFunction()