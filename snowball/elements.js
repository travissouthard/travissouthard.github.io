const formRowItems = [
  {
    name: "debt-name",
    type: "text",
    placeholder: "Name of debt",
    label: "Name:",
  },
  {
    name: "debt-amount",
    type: "number",
    placeholder: "Amount Remaining",
    label: "Amount:",
    min: "0",
  },
  {
    name: "debt-minimum",
    type: "number",
    placeholder: "Minimum payment",
    label: "Minimum:",
    min: "0",
  },
  {
    name: "debt-rate",
    type: "number",
    placeholder: "Interest rate",
    label: "Interest:",
    min: "0",
    max: "100",
  },
];

let rowNum = 1;
const addDebtRow = () => {
  const container = document.getElementById("row-container");
  const blankDebtRow = document.createElement("div");
  blankDebtRow.className = "form-row";

  for (let item of formRowItems) {
    const label = document.createElement("label");
    const labelText = document.createTextNode(item.label);
    const itemName = `${item.name}-${rowNum}`;
    label.for = itemName;
    label.appendChild(labelText);

    const input = document.createElement("input");
    input.name = itemName;
    input.type = item.type;
    input.placeholder = item.placeholder;
    if (item.min !== undefined) {
      input.min = item.min;
    }
    if (item.max !== undefined) {
      input.max = item.max;
    }

    label.appendChild(input);
    blankDebtRow.appendChild(label);
  }

  const removeButton = document.createElement("button");
  const removeButtonLabel = document.createTextNode("X");
  removeButton.appendChild(removeButtonLabel);
  removeButton.addEventListener("click", () =>
    container.removeChild(blankDebtRow)
  );
  blankDebtRow.appendChild(removeButton);

  container.appendChild(blankDebtRow);
  rowNum++;
};

const makeChart = (paydownObject) => {
  return new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Comparing snowball with traditional",
      fontFamily: "sans-serif",
    },
    axisY: {
      prefix: "$",
      valueFormatString: "#,###",
    },
    axisX: {
      title: "Months To Pay Down",
    },
    toolTip: {
      shared: true,
    },
    colorSet: "snowballColors",
    data: [
      ...paydownObject.snowballDebts.map((debt) => {
        return {
          type: "stackedArea",
          showInLegend: true,
          name: debt.name,
          dataPoints: debt.paydown,
        };
      }),
      {
        type: "line",
        showInLegend: true,
        name: "Traditional Paydown",
        dataPoints: paydownObject.traditionalPaydown,
      },
      {
        type: "line",
        showInLegend: true,
        name: "Snowball Paydown",
        dataPoints: paydownObject.snowballPaydown,
      },
    ],
  });
};

const getPaydown = (elements) => {
  const debtObjects = createDebtObjects(elements);
  return new Paydown(debtObjects);
};

const stringifyMoney = (num) => {
  let numString = Math.floor(num).toString();
  const cents = `.${(num % 1).toFixed(2).slice(2)}`;
  if (num < 1000) return `$${numString}${cents}`;
  const groupsOfThree = [];
  for (let i = numString.length; i >= 0; i -= 3) {
    if (i < 3) {
      let head = numString.slice(0, i);
      if (head) groupsOfThree.unshift(head);
    } else {
      groupsOfThree.unshift(numString.slice(i - 3, i));
    }
  }
  return `$${groupsOfThree.join()}${cents}`;
};

const createInfoText = (paydownObject) => {
  if (paydownObject.debts.length === 1) {
    return `
      If you have no debts, congratulations! But also you have no need for a snowball. \n
      Use the 'Add debt' button to add new debt forms.
    `;
  }
  if (paydownObject.debts.length === 2) {
    return "Snowball plans really only work for multiple debts. Or else there is no previous payment to add to the current one.";
  }

  return `Using the debt snowball method, your ${
    paydownObject.debts.length - 1
  } debts could be paid off in ${
    paydownObject.snowballSavings.time
  } fewer months than a traditional paydown. This could also save you ${stringifyMoney(
    paydownObject.snowballSavings.money
  )} in total.`;
};

const renderPaydownInfo = (paydownObject) => {
  const paydownInfoDiv = document.getElementById("paydown-info");
  const paydownInfoP = document.createElement("p");
  const paydownInfo = document.createTextNode(createInfoText(paydownObject));

  paydownInfoP.appendChild(paydownInfo);
  paydownInfoDiv.replaceChildren(paydownInfoP);
};

renderPaymentsTable = (paydownObject) => {
  const createCell = (type, text) => {
    let cell = document.createElement(type);
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    return cell;
  };
  const container = document.getElementById("payments-table");
  const table = document.createElement("table");
  const title = document.createElement("tr");
  const titleCell = createCell("th", "A Snowball Payment Plan");
  let thead = document.createElement("tr");

  titleCell.setAttribute("colspan", `${paydownObject.snowballDebts.length}`);
  title.appendChild(titleCell);

  thead.appendChild(createCell("th", "Month"));
  table.appendChild(title);
  table.appendChild(thead);

  for (let i = 0; i < paydownObject.snowballPaydown.length; i++) {
    let row = document.createElement("tr");
    const cellDate = getDateFromNum(i).toDateString().split(" ");
    cellDate.shift();
    cellDate.splice(1, 1);
    const dateTd = createCell("td", cellDate.join(" "));
    dateTd.classList.add("cell-date");
    row.appendChild(dateTd);

    for (let debt of paydownObject.snowballDebts) {
      if (debt.name !== "Extra Payment") {
        if (i === 0) {
          thead.appendChild(createCell("th", debt.name));
        }
        row.appendChild(
          createCell(
            "td",
            debt.payments[i] ? stringifyMoney(debt.payments[i]) : ""
          )
        );
      }
    }
    table.appendChild(row);
  }
  container.replaceChildren(table);
};
