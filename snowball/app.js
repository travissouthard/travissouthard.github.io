const formRowItems = [
    {name: "debt-name", type: "text", placeholder: "Name of debt", label: "Name:"},
    {name: "debt-amount", type: "number", placeholder: "Amount Remaining", label: "Amount:", min: "0"},
    {name: "debt-minimum", type: "number", placeholder: "Minimum payment", label: "Minimum:", min: "0"},
    {name: "debt-rate", type: "number", placeholder: "Interest rate", label: "Interest:", min: "0", max: "100"},
]

class Debt {
    constructor({name, amount, minimum, rate}) {
        this.name = name || ""
        this.amount = amount || 0
        this.minimum = minimum || 0
        this.rate = rate || 0
        this.paydown = this.calculatePayments(amount, minimum, rate, [amount])
        this.paymentseft = this.paydown.length
    }

    roundCents = (num) => {
        return parseFloat(num.toFixed(2))
    }

    calculatePayments = (remaining, min, rate, payments = []) => {
        const interest = remaining * ((rate/100)/12)
        let newRemaining = remaining + interest
        if (newRemaining < min && newRemaining - min <= 0) {
            return payments
        }

        newRemaining = newRemaining - min
        payments.push(this.roundCents(newRemaining))
        return this.calculatePayments(newRemaining, min, rate, payments)
    }
}

let rowNum = 0
const addDebtRow = () => {
    const container = document.getElementById("row-container")
    const blankDebtRow = document.createElement("div")
    blankDebtRow.className = "form-row"

    for (let item of formRowItems) {
        const label = document.createElement("label")
        const labelText = document.createTextNode(item.label)
        const itemName = `${item.name}-${rowNum}`
        label.for = itemName
        label.appendChild(labelText)

        const input = document.createElement("input")
        input.name = itemName
        input.type = item.type
        input.placeholder = item.placeholder
        if (item.min !== undefined) {
            input.min = item.min
        }
        if  (item.max !== undefined) {
            input.max = item.max
        }

        blankDebtRow.appendChild(label)
        blankDebtRow.appendChild(input)
    }
    if (container.childNodes.length > 0) {
        const removeButton = document.createElement("button")
        const removeButtonLabel = document.createTextNode("X")
        removeButton.appendChild(removeButtonLabel)
        removeButton.addEventListener("click", () => container.removeChild(blankDebtRow))
        blankDebtRow.appendChild(removeButton)
    }

    container.appendChild(blankDebtRow)
    rowNum++
}

const addDebtButton = document.getElementById("add-debt")
addDebtButton.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    addDebtRow()
})

const createDebtObjects = (elements) => {
    const debts = []
    let count = 0
    while (elements[`debt-name-${count}`] !== undefined) {
        let debtData = {
            name: elements[`debt-name-${count}`].value,
            amount: elements[`debt-amount-${count}`].valueAsNumber,
            minimum: elements[`debt-minimum-${count}`].valueAsNumber,
            rate: elements[`debt-rate-${count}`].valueAsNumber
        }
        debts.push(new Debt(debtData))
        count++
    }
    return debts
}

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(createDebtObjects(document.getElementById("debt-form").elements))
})

window.addEventListener("load", (e) => {
    addDebtRow()
})