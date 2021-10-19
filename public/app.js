"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("Mario", "Work on Plumbing", 236);
var invTwo = new Invoice("Luigi", "Window Cleaning", 1);
var invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var toform = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
