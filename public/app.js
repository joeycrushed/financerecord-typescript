import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("Mario", "Work on Plumbing", 236);
const invTwo = new Invoice("Luigi", "Window Cleaning", 1);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
