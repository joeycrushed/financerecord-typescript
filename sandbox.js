var character = "mario";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(69));
var names = ["Joe", "Laura", "Dolly", "Ruby", "Brun"];
names.push("Roxy");
var mixed = ["ken", 10, "Steve", true, 8, 9];
mixed.push("tru");
console.log(mixed);
var object = {
    name: "mario",
    belt: "green",
    age: 23
};
// explicity types
var person;
var age;
var isLoggedIn;
// arrays
var ninja = [];
// union types
var mixeds = [];
mixeds.push("hello", 34, true);
console.log(mixeds);
var uid;
uid = "treadsfsa";
uid = 343;
// objects
var ninja1;
ninja1 = { name: "yoshi" };
var ninja2;
