import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice("Mario", "Work on Plumbing", 236)
const invTwo = new Invoice("Luigi", "Window Cleaning", 1)

let invoices: Invoice[] = []
invoices.push(invOne, invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
    type.value,
    toform.value,
    details.value,
    amount.valueAsNumber
    ); 
})