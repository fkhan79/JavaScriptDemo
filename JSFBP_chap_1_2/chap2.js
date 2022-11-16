//Variables, Datatypes and Conversions
{
    let var1 = 1;
    let var2 = "abc";
    let var3 = true;
    let var4;
    let var5 = null;
    console.log("var1 is typeof", typeof var1);
    console.log("var2 is typeof", typeof var2);
    console.log("var3 is typeof", typeof var3);
    console.log("var4 is typeof", typeof var4);
    console.log("var5 is typeof", typeof var5);
}
//Conversions
{
    //Numeric Conversions
    //All non numeric conversion returned as NaN
    //All Empty Strings, Null, and Undefined values converted to Zero

    let var1 = 100;
    let var2 = "200";
    console.log(var1 + var2);/*Trying to add 2 variables. var1 is number, var2 is string, since the + operator is overloaded 
                            for numerics for additions 
                            and concatinations for string, the js interperator automatically convert var1 to string 
                            and concatinate instead of adding the number
                             */
    console.log(var1 + Number(var2));/*Explicit conversion of var2 from string to number, if it can be converted to number
                                    the code will execute*/
    console.log(var1 * var2);//Implicit conversion since var2 is string but contains a number, the interpreter automatically converts it to number
    console.log(var1 - var2);//Implicit conversion since var2 is string but contains a number, the interpreter automatically converts it to number
    console.log(var1 / var2);//Implicit conversion since var2 is string but contains a number, the interpreter automatically converts it to number

    //reassigning var2 as a non-numeric string
    var2 = "Avada Kedavra";
    let varx = Number(var2);
    console.log(var2, typeof var2);//although varx is a number
    console.log(var1 + varx);/*Explicit conversion of var2 from string to number,
                               since its a non numeric no, the conversion will fail, reulting NaN (Not a Number)*/

    //Explicit Numeric Conversion
    let var6;//Undefined
    let var7 = Number(var6);//Converted to Number
    console.log(var6, typeof var6);//Returned Undefined
    console.log(var7, typeof var7);//Returned Number

    var6 = "";//Empty String
    var7 = Number(var6);//Converted to Number
    console.log(var6, typeof var6);//Empty and type String
    console.log(var7, typeof var7);//Empty String converted to 0 with type number

    var6 = null;//Null
    var7 = Number(var6);//Converted to Number
    console.log(var6, typeof var6);//Null and type Null
    console.log(var7, typeof var7);//Null converted to 0 with type number

    var6 = "Wingardium Leviosa";//Empty String
    var7 = Number(var6);//Converted to Number
    console.log(var6, typeof var6);//Empty and type String
    console.log(var7, typeof var7);//Empty String converted to 0 with type number


    //Boolean Conversion

    //All numeric and non numeric conversion returned as True
    //All Empty Strings, Null, and Undefined values converted to false
    let boolString;
    //Undefined to Boolean
    console.log(boolString, typeof boolString);//Undefined
    boolString = Boolean(boolString);//For Undefined it will be converted and assigned false
    console.log(boolString, typeof boolString);

    //Null to Boolean
    boolString = null;
    console.log(boolString, typeof boolString)//Null, shown as object(not really the object type, 
    //but to maintain backward comnpatibility of a bug in core interpreter, it shows as object)
    boolString = Boolean(boolString);//For Empty String it will be converted and assigned false
    console.log(boolString, typeof boolString)

    //String to Boolean
    boolString = "Petrificus Totalus";
    console.log(boolString, typeof boolString);
    boolString = Boolean(boolString);//Convert String to boolean, and it will be assigned true
    console.log(boolString, typeof boolString);

    //Number to Boolean
    boolString = 1000;//reassigned a number
    console.log(boolString, typeof boolString);
    boolString = Boolean(boolString);//convert an int to boolen, and it will be assigned true
    console.log(boolString, typeof boolString);

    //Empty String to Boolean
    boolString = "";//reassigned an empty string
    console.log(boolString, typeof boolString);
    boolString = Boolean(boolString);//For Empty String it will be converted and assigned false
    console.log(boolString, typeof boolString)

}

{
    //All Variable are declared in an unnamed block
    var variable1 = 100;//even its defined in a block (0)
    let variable2 = 200;
    const variable3 = null; //cannot assigned undifined to constants, you can assign null, but cannot reuse that vairable
    //variable3 = "abc" //cannot reassign a value to constant,Uncaught TypeError: Assignment to constant variable.

}
function test() {
    console.log(variable1);//(0) can be called since it was declered as var and created at global level aand available at this point
    //console.log(variable2);//Uncaught ReferenceError: variable2 is not defined, constant ws declared as a local block variable, hence not available outside the block
    //console.log(variable3);//Uncaught ReferenceError: variable3, constant ws declared a a local block variable, hence not available outside the block
}

test();


//Arithmetic Operation
{
    let var1 = 100;
    let var2 = 15;
    //Addition
    console.log("var1+var2: (", var1, "+", var2, ")", var1 + var2);
    //Subtraction
    console.log("var1-var2: (", var1, "-", var2, ")", var1 - var2);
    //Multiplication
    console.log("var1*var2: (", var1, "*", var2, ")", var1 * var2);
    //Division
    console.log("var1/var2: (", var1, "/", var2, ")", var1 / var2);
    //Modulus (Remainder)
    console.log("var1%var2: (", var1, "%", var2, ")", var1 % var2);
    //Exponent (power)
    console.log("var1**var2: (", var1, "**", var2, ")", var1 ** var2);
   

    //Unary Operator
    //prefix operation-Addition
    console.log("Before Prefix Operation:", var1, ": Apply Prefix ++: ", ++var1, ": After Prefix ++: ", var1);//The prefix gets executed before sending the variable through
    var1 = 100;
    console.log("Before Prefix Operation:", var1, ": Apply Prefix --: ", --var1, ": After Prefix --: ", var1);//The prefix gets executed before sending the variable through
    //post operation-Addition
    var1 = 100;
    console.log("Before Postfix Operation:", var1, ": Apply Postfix ++: ", var1++, ": After Prefix ++: ", var1)//The postfix gets executed after sending the variable through, and then after that, the    operation gets executed
    var1 = 100;
    console.log("Before Prefix Operation:", var1, ": Apply Prefix --: ", var1--, ": After Prefix --: ", var1);//The postfix gets executed after sending the variable through, and then after that, the     operation gets executed

    
    var1 = 0;
    console.log("Before Prefix Operation:", var1, ": Apply Prefix ++: ", ++var1, ": After Prefix ++: ", var1);//The prefix gets executed before sending the variable through

    var1 = 0;
    console.log("Before Prefix Operation:", var1, ": Apply Prefix ++: ", var1++, ": After Prefix ++: ", var1);//The postfix gets executed after sending the variable through, and then after that, the     operation gets executed

    //Assignment and Comparison Operators
    let x=2000;//= is an assignment operator
    let y=2000;//= is an assignment operator
    console.log(x==y);//== is a equality comparison operator
    y="2000";
    console.log(x==y);//== is a equality comparison operator without checking the type, only values are compared
    console.log(x===y);//=== is a equality comparison operator, with type checking, values and types both are compared

    x=1000;
    y=10000;
    console.log(x>y);//Check if the left operand is greater then right
    console.log(y>x);//Check if the left operand is greater then right

    console.log(x<y);//Check if the left operand is lesser then right
    console.log(y<x);//Check if the left operand is lesser then right

    y=1000;
    console.log(x>=y);//Check if the left operand is greater or equal then right
    console.log(y>=x);//Check if the left operand is greater or equal then right

    y=1000;
    console.log(x<=y);//Check if the left operand is lesser or equal then right
    console.log(y<=x);//Check if the left operand is lesser or equal then right

    y=2000;
    console.log(x!=y);//Check if the left operand is not equal then right
    console.log(y!=x);//Check if the left operand is not equal then right

    console.log(100 == 100 && 200==200); //&& Runs on 2 boolean operands, For a true value, both must be true
    console.log(100 == 100 || 200!=200); //&& Runs on 2 boolean operands, For a true value, both must be true

}
