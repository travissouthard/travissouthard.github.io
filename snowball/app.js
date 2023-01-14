const addDebtButton = document.getElementById("add-debt");
addDebtButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  addDebtRow();
});

const renderPaydown = (paydownObject) => {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.classList.add("chart-rendered");

  renderPaydownInfo(paydownObject);
  renderPaymentsTable(paydownObject);
  const chart = makeChart(paydownObject);
  chart.render();
};

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const paydown = getPaydown(document.getElementById("debt-form").elements);
  renderPaydown(paydown);
});

window.addEventListener("load", (e) => {
  addDebtRow();
  CanvasJS.addColorSet("snowballColors", [
    "#375B75",
    "#BEDFF7",
    "#73BFF5",
    "#5A6A75",
    "#5B97C2",
  ]);
});
