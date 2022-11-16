//Unformatted Garbage looking code

// let status = "new"; let scared = true; if (status === "new") { console.
//     log("Welcome to JavaScript!"); if (scared) { console.log(`Don't worry
//     you will be fine!`); } else { console.log(`You're brave! You are going
//     to do great!`); } } else { console.log(`Welcome back, I knew you'd like
//     it!`); }

//Formatted Neat Looking Code--Single Line Comment
/*Multiline Comment
If your string span on multiple lines then use ` instead of " to span string on multiple like
Other wise the Interpreter wont be able to read the file and throw an error on the line Uncaught SyntaxError: Invalid or unexpected token*/
// let status = "new"; let scared = true; if (status === "new") {
//     console.
//         log("Welcome to JavaScript!"); if (scared) {
//             console.log("Don't worry
//     you will be fine!"");
//         } else {
//             console.log("You're brave! You are going
//     to do great!"");
//     }
// } else {
//     console.log("Welcome back, I knew you'd like
//     it!");
// }
//Formatted Neat Looking and Perfectly working Code
let status = "new";
let scared = false;
if (status === "new") {
    console.log("Welcome to JavaScript!"); 
        if (scared) {
            console.log("Don't worry you will be fine!");
        } else {
        console.log("You're brave! You are going to do great!");
    }
} else {
    console.log("Welcome back, I knew you'd like it!");
}
//Adding a Prompt for Input
let input=prompt("Hi! How are you Mr")
console.log("Hello "+input+" from console!!!")