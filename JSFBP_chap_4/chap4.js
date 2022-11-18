//Conditions
//IF and Else
let rain = true;//lets create a boolean variable
if (rain)//check if the value witing the parethesis is true, if yes, open the gate for true value
{
    console.log("** Taking my umbrella when I need to go outside **");
} else //check if the value in the previous parethesis is false, if false, open the gate for false value
{
    console.log("** I can leave my umbrella at home **");
}


//If Else IF and ELSE
rain = true;//lets create a boolean variable for rain
let isCloudy = true;//a variable to denote if the weater is cloudy
if (rain && isCloudy)//check if the weather is cloudy and its rainig
{
    console.log("** Taking my umbrella when I need to go outside **");
} else if (!rain && isCloudy)//may be the weather is cloudy but no rain
{
    console.log("** I shouldnt leave my umbrella at home as it is cloudy **");
} else if (rain && !isCloudy)//may be the weather is not cloudy but its rain
{
    console.log("** Its raining, but not cloudy. May be the rain stops, but i should take my umbrella **");
} else //No Rain No Clouds
{
    console.log("** Sunny Day Sweepin' the clouds away. On my way to where the air is sweet. **");
}

//Ternary Operator: A short for of if-else
//using isCloudy as true
let stringValue = isCloudy ? "Take the Umbrella" : "Dont Take the Umbrella";//You can have as many ternary operation in the operands, but a value must be returned in the end

//Switch Case:
let activity = "Lunch"
if (activity === "Get up") {
    console.log("It is 6:30AM");
} else if (activity === "Breakfast") {
    console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
    console.log("It is 8:00AM");
} else if (activity === "Lunch") {
    console.log("It is 12.00PM");
} else if (activity === "Drive home") {
    console.log("It is 5:00PM")
} else if (activity === "Dinner") {
    console.log("It is 6:30PM");
}
//the above perfectly looking if else code can be written easily and concisely as 
switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        // code to be executed when no cases match
        console.log("So jaa nahi tu gabbar ajayayga :p")
        break;
}

//Loops
//While Loop
//Simple While Loop
let i = 0;
while (i < 10) {//Boolean Condition Evaluated, Execute, Not Evaluated, Exit
    console.log(i);
    i++;
}
//A Little Complex One
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[0] === "Louiza") {
        console.log("Found her!");
        notFound = false;
    } else {
        someArray.shift();
    }
}

//Do-While
let number;
do {
    number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));

//For Loop
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}
//Nested Loops
//Nested For
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}

//For Of
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names) {
    console.log(name);
}