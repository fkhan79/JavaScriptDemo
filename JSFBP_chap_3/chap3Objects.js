let dog = {
    dogName: "John Wick's Dog",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};//The object written in JavaScript is called JavaScripe Object Notion (JSON) and is a defacto-standard for all rest based programming

//lets access some values from the dog object and see in the console
console.log(dog);//Prints how a dog object looks in JSON
console.log(dog.color);//Get some value from dog object.
console.log(dog["color"]);//works in the same manner as line 12

//You can update the value in the same manner you are getting the values from and object and assign it a value using assignment operator
dog.color = "black";//assigns a new value to Dog object
console.log(dog);//Prints how a dog object looks in JSON
console.log(dog.color);//Get some value from dog object.
console.log(dog);//Prints how a dog object looks in JSON
dog["color"] = "white";//assigns a new value to Dog object
console.log(dog.color);//Get some value from dog object.


//Complex Objects
let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};
//lets read the company object
console.log(company);
//get the company name
console.log(company.companyName);
console.log(company["companyName"]);

//Get the Address of the Company
console.log(company.address);//Here compnay address returns as anthor Java Script Object
//Since address can containg further element, the Compnay object designs as
//a complex object.

console.log(company.address.zipcode);//Get the ZipCode using the dot(.) operator
//Dot operator is often used to access internal properties 
//and behavior of an object

console.log(company["address"]["zipcode"]);//You can also use the array notion to extract information from and object

//Objects with Arrays
company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};
console.log(company);
console.log(company.activities[1]);//Get the value at index 1 in company's activitiy array

//Arrays of Object
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
}];

console.log(addresses);
console.log(addresses[1]);//gets the 2nd address in the list
console.log(addresses[0].street);//Get the 1st address in the array and print street
console.log(addresses[0]["street"]);//Get the 1st address in the array and print street

