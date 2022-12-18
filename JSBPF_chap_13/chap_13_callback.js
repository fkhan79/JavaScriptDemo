function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}
function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            console.log(score);
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    callback(grade);
}
getGrade(85, judge);
function encourage() {
    console.log("You're doing great, keep going!");
}
setTimeout(() => {
    encourage();
}, 500);

const promise = new Promise((resolve, reject) => {
    resolve("success!");
}).then(value => {
    console.log(value);
    return "we";
}).then(value => {
    console.log(value);
    return "can";
}).then(value => {
    console.log(value);
    return "chain";
}).then(value => {
    console.log(value);
    return "promises";
}).then(value => {
    console.log(value);
}).catch(value => {
    console.log(value);
});

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something " + x);
        }, 2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}

talk("abc");

function addOne(val) {
    return val + 1;
}
function total(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}
console.log(total(4, 5, addOne));

function checker(val) {
    return new Promise((resolve, reject) => {
        if (val > 5) {
            resolve("Ready");
        } else {
            reject(new Error("Oh no"));
        }
    });
}
checker(5)
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err); });



function myFun() {
    return new Promise((resolve, reject) => {resolve("Hello") });
}
myFun().then(
    function (val) { console.log(val); },
    function (err) { conole.log(err); }
);