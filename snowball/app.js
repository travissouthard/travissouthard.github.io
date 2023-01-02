const formRowData = [
    {name: "debt-name", type: "text", placeholder: "Name of debt", label: "Name:"},
    {name: "debt-amount", type: "number", placeholder: "Amount Remaining", label: "Amount:", min: "0"},
    {name: "debt-minimum", type: "number", placeholder: "Minimum payment", label: "Minimum:", min: "0"},
    {name: "debt-rate", type: "number", placeholder: "Interest rate", label: "Interest:", min: "0", max: "100"},
]

const addDebtRow = () => {
    const container = document.getElementById("row-container")
    const blankDebtRow = document.createElement("div")
    blankDebtRow.className = "form-row"

    for (let row of formRowData) {
        const label = document.createElement("label")
        const labelText = document.createTextNode(row.label)
        label.for = row.name
        label.appendChild(labelText)

        const input = document.createElement("input")
        input.name = row.name
        input.type = row.type
        input.placeholder = row.placeholder
        if (row.min !== undefined) {
            input.min = row.min
        }
        if  (row.max !== undefined) {
            input.max = row.max
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
}

const addDebtButton = document.getElementById("add-debt")
addDebtButton.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    addDebtRow()
})

window.addEventListener("load", (e) => {
    addDebtRow()
})