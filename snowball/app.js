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

let rowNum = 0;
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

    blankDebtRow.appendChild(label);
    blankDebtRow.appendChild(input);
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

const addDebtButton = document.getElementById("add-debt");
addDebtButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  addDebtRow();
});

const createDebtObjects = (elements) => {
  const debts = [];
  let count = 0;
  while (elements[`debt-name-${count}`] !== undefined) {
    let debtData = {
      name: elements[`debt-name-${count}`].value,
      amount: elements[`debt-amount-${count}`].valueAsNumber,
      minimum: elements[`debt-minimum-${count}`].valueAsNumber,
      rate: elements[`debt-rate-${count}`].valueAsNumber,
    };
    debts.push(new Debt(debtData));
    count++;
  }
  return debts;
};

const makeChart = (paydownObject) => {
  return new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Comparing snowball with traditional",
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
    data: [
      ...paydownObject.snowballDebts.map((debt) => {
        return {
          type: "stackedArea",
          showInLegend: true,
          toolTipContent:
            '<span style="color:#AA3300"><strong>{name}: </strong></span> ${y}',
          name: debt.name,
          dataPoints: debt.paydown,
        };
      }),
      {
        type: "line",
        showInLegend: true,
        toolTipContent:
          '<span style="color:#0033AA"><strong>{name}: </strong></span> ${y}',
        name: "Traditional Paydown",
        dataPoints: paydownObject.traditionalPaydown,
      },
      {
        type: "line",
        showInLegend: true,
        toolTipContent:
          '<span style="color:#00AA00"><strong>{name}: </strong></span> ${y}',
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
      groupsOfThree.unshift(numString.slice(0, i));
      break;
    }
    groupsOfThree.unshift(numString.slice(i - 3, i));
  }
  return `$${groupsOfThree.join()}${cents}`;
};

const renderPaydown = (paydown) => {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.classList.add("chartRendered");

  const paydownInfoDiv = document.getElementById("paydown-info");
  const paydownInfoP = document.createElement("p");
  const paydownInfo = document.createTextNode(
    paydown.debts.length > 1
      ? `Using the debt snowball method, your ${
          paydown.debts.length
        } debts could be paid off in ${
          paydown.snowballSavings.time
        } fewer months than a traditional paydown. This could also save you ${stringifyMoney(
          paydown.snowballSavings.money
        )} in total.`
      : "Snowball plans really only work for multiple debts. Or else there is no previous payment to add to the current one."
  );

  paydownInfoP.appendChild(paydownInfo);
  paydownInfoDiv.replaceChildren(paydownInfoP);
  const chart = makeChart(paydown);
  chart.render();
};

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const paydown = getPaydown(document.getElementById("debt-form").elements);
  console.log(paydown);
  renderPaydown(paydown);
});

window.addEventListener("load", (e) => {
  addDebtRow();
});
