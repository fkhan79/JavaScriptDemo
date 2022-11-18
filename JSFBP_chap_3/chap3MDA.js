//MultiDimensional Arrays, Arrays of Array, List of Arrays
let arr1=[1,2,3];
let arr2=[3,4,5];
let arr3=[6,7,8];

//Create an array of arr
let mda=[arr1,arr2,arr3];
console.log(mda);//will show a matrix like structure for 3x3

//Reading an Array

// we have 3 internal arrays with 3 values each in mda. making it a 3x3 matrix
console.log(mda[0][2]);//the first square bracket contains the index of main array.

//3 dimensional  array
let arr3d=[mda,mda,mda];//here i have added the mda 3 time in arr3d
console.log(arr3d);
//in order to get values you can write
console.log(arr3d[0][1][2]);//first bracket retuerns the first mda, 
                            //the 2nd bracket returns the arr2 in first mda, 
                            //and 3rd bracket returns the 3rd element in first mda 
