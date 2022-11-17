//Creating Arrays
arr1 = new Array("value1", "value2", "value3");//A string array with 3 values
arr2 = ["value1", "value2", "value3"];//Another syntax for creating arrays with 3 string values
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);

//Create a Blank Array with 10 elements
arr10 = new Array(10);//Array Created with 10 Blank Memory spaces
console.log("arr10: ", arr10);
//Set the value at index 0 and index 10
arr10[0] = "Value at 0 Index";
console.log("arr10: After adding value at Index 0  ", arr10.length);
arr10[10] = "Value at 10 Index";//Although added the element at index 10, which is technically the 11th position of the array
//but the interpreter dynamically added a new index at the end, and stores the value and 11th index
console.log("arr10: After adding value at Index 10 ", arr10.length);

//Although the Index values supposed to be positive, but negative index can be used in an array
//In case of negative indexes the values will be appended at the end of array, but the length of the array will not be affected. it will always return the positve index size
//Kind a stupid though, but the interpreter works in this way
arr10[-1] = "Test-1";
arr10[-3] = "Test-3";
arr10[-2] = "Test-2";
console.log("arr10: After adding value at Index 0  ", arr10.length);

//The Array Push/Pop Method. This will make the array to act as an Stack Data Structure
arrPushPop = [];//Lets create an empty array
console.log("arrPushPop: Length Before Push  ", arrPushPop.length);//The element will be pushed at the next positive index
arrPushPop.push("Push 1st Element");//added a new element at index 0 
console.log("Array Elements after 1st Push", arrPushPop.length, arrPushPop);//The element will be pushed at the next positive index
arrPushPop.push("Push 2nd Element");//added a new element at index 1 
console.log("Array Elements after 2nd Push", arrPushPop.length, arrPushPop);//The element will be pushed at the next positive index
arrPushPop.push("Push 3rd Element");//added a new element at index 2 
console.log("Array Elements after 3rd Push", arrPushPop.length, arrPushPop);//The element will be pushed at the next positive index
//Pop an Array
console.log("Array Elements Before Pop", arrPushPop.length, arrPushPop);//The array has 3 elements so far
console.log(arrPushPop.pop());
console.log("Array Elements After Popping 3rd Element", arrPushPop.length, arrPushPop);
//The array has now 2 elements so far.After calling pop method, now array has only 2 elements left
console.log(arrPushPop.pop());
console.log("Array Elements After Popping 2nd Element", arrPushPop.length, arrPushPop);
//The array has now 1 element left
console.log(arrPushPop.pop());
console.log("Array Elements After Popping first Element", arrPushPop.length, arrPushPop);
//The array has now 0 element left
console.log(arrPushPop.pop());
//Returnd Undefined, since the array is empty with no values left
console.log("Array Elements After Popping All Element", arrPushPop.length, arrPushPop);
//The array is of 0 length


//Splice Demo
arrSpliceDemo=[1,2,3,4,5,6,7];//Array with 7 Elements and 0-6 Index
console.log("arrSpliceDemo: ", arrSpliceDemo.length,arrSpliceDemo);
arrSpliced=arrSpliceDemo.splice(3,2);//a new array is created from 3rd index of original array. 3 is the index of original array, and 2 elements will be spliced
                                    // removes 2 values from orignial 1.e the 4th and the 5th elements
console.log("arrSpliced: ", arrSpliced.length,arrSpliced);//the new array contains 2 elements
console.log("arrSpliceDemo: ", arrSpliceDemo.length,arrSpliceDemo);//the original array minus 2 elements at index 4 and 5


//Shift Demo
arrShift=[1,2,3,4,5,6,7];//Array with 7 Elements and 0-6 Index
console.log("arrShift: ", arrShift.length,arrShift);
value=arrShift.shift()
console.log("arrShift: ", arrShift.length,arrShift,value);//Element at Index 0 is removed

//Array Concatenations
arrBase1=[1,2,3,4,5,6,7];//Array with 7 Elements and 0-6 Index
console.log("arrBase1: ", arrBase1.length,arrBase1);
arrBase2=[1,2,3,4,5,6,7];//Array with 7 Elements and 0-6 Index
console.log("arrBase2: ", arrBase2.length,arrBase2);
arrx=arrBase1.concat(arrBase2)
console.log("arx2: ", arrx.length,arrx);
