const character = "mario"
console.log(character)

const inputs = document.querySelectorAll("input")

console.log(inputs)

inputs.forEach(input => {
    console.log(input)
})

const circle = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circle(69))

let names = ["Joe", "Laura", "Dolly", "Ruby", "Brun"]
names.push("Roxy")

let mixed = ["ken", 10, "Steve", true, 8, 9]
mixed.push("tru")
console.log(mixed)

let object = {
    name: "mario",
    belt: "green",
    age: 23
}

// explicity types

let person: string
let age: number
let isLoggedIn: boolean;

// arrays
let ninja: string[] = []

// union types

let mixeds: (string|number|boolean)[] = []
mixeds.push("hello", 34, true)
console.log(mixeds)


let uid: string|number;
uid = "treadsfsa"
uid = 343

// objects

let ninja1: object;
ninja1 = { name: "yoshi", }

let ninja2: {
    name: string,
    age: number,
    belt: string
}