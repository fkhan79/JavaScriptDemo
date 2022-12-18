class Human {
    #name
    #type
    constructor(name, type) {
        this.#name = name;
        this.#type = type
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get type() {
        return this.#type;
    }
    set name(type) {
        this.#type = type;
    }
    getHuman() {
        console.log("Hello!!! I am", this.#name, "and of type", this.#type);
    }
}
class EnhancedHuman extends Human {
    #skinTone
    #eyeColor
    #bodyType
    constructor(name, type, skinTone, eyeColor, bodyType) {
        super(name, type);
        this.#skinTone = skinTone;
        this.#eyeColor = eyeColor;
        this.#bodyType = bodyType;
    }
    getEnhancedHuman() {
        console.log("Hello!!! I am", this.name, "and of type",
            this.type, "with skin tone", this.#skinTone, ", eyes color as", this.#eyeColor,
            " and body type", this.#bodyType);
    }

}



let human1 = new Human("Adam", "Bipedal");
let human2 = new EnhancedHuman("Adam", "Bipedal", "white", "blue", "Large");
human2.getHuman();
human2.getEnhancedHuman();

EnhancedHuman.prototype.speed = "17 kph";
EnhancedHuman.prototype.newFunc = function () {
    console.log("I got the power!!!!");
}
console.log(human2.speed);
human2.newFunc();

