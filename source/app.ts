import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'


const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number]
    values = [toform.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, "end")
})

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "webwork", 250)
// docTwo = new Payment("mario", "plumbing", 150)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: "joe",
//     age: 34,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log("i spent", amount)
//         return amount
//     },
// };


// const greetPerson = (person: IsPerson) => {
//     console.log("hello", person.name)
// }

// greetPerson(me)

// console.log(me)

// const invOne = new Invoice("Mario", "Work on Plumbing", 236)
// const invTwo = new Invoice("Luigi", "Window Cleaning", 1)

// let invoices: Invoice[] = []
// invoices.push(invOne, invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })

// tuples