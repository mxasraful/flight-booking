
// Id for ticket items
const fcMinusBtn = document.getElementById("fcMinusBtn");
const firstClassTicketsItems = document.getElementById("firstClassTicketsItems");
const fcPlusBtn = document.getElementById("fcPlusBtn");
const eMinusBtn = document.getElementById("eMinusBtn");
const economyTicketsItems = document.getElementById("economyTicketsItems");
const ePlusBtn = document.getElementById("ePlusBtn");
const subtotal = document.getElementById("subtotal");
const vat = document.getElementById("vat");
const total = document.getElementById("total");

let fcTicketsValue = 0;
let economyTicketsValue = 0;
let subtotalAmount = 0;
let vatAmount = 0;
let totalAmount = 0;

let firstClassAmount = 0;
let economyAmount = 0;

// Function for tickets items plus
function plusItems(valueFor) {
    if (valueFor === "firstClass") {
        if (fcTicketsValue < 9) {
            fcTicketsValue = fcTicketsValue + 1
            firstClassTicketsItems.innerHTML = fcTicketsValue
            calculation()
        } else {

        }
    } else if (valueFor = "economy") {
        if (economyTicketsValue < 9) {
            economyTicketsValue = economyTicketsValue + 1
            economyTicketsItems.innerHTML = economyTicketsValue
            calculation()
        } else {

        }
    }
}

// Function for tickets items minus
function minusItems(valueFor) {
    if (valueFor === "firstClass") {
        if (fcTicketsValue > 0) {
            fcTicketsValue = fcTicketsValue - 1
            firstClassTicketsItems.innerHTML = fcTicketsValue
            calculation()
        } else {

        }
    } else if (valueFor = "economy") {
        if (economyTicketsValue > 0) {
            economyTicketsValue = economyTicketsValue - 1
            economyTicketsItems.innerHTML = economyTicketsValue
            calculation()
        } else {

        }
    }
}

// Function total calculation
function calculation() {
    if (economyTicketsValue > 0) {
        const dt = 100 * economyTicketsValue
        economyAmount = dt
    } else {
        economyAmount = 0
    }
    if (fcTicketsValue > 0) {
        const dt = 150 * fcTicketsValue
        firstClassAmount = dt
    } else {
        firstClassAmount = 0
    }
    const dataSubtotal = firstClassAmount + economyAmount
    subtotal.innerHTML = "$ " + dataSubtotal;
    const dataVat = dataSubtotal/100*10
    vat.innerHTML = "$ " + dataVat
    total.innerHTML = "$ " + (dataSubtotal + dataVat)
}

firstClassTicketsItems.innerHTML = fcTicketsValue;
economyTicketsItems.innerHTML = economyTicketsValue;
subtotal.innerHTML = "$ " + subtotalAmount;
vat.innerHTML = "$ " + vatAmount;
total.innerHTML = "$ " + totalAmount;

