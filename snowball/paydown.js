const now = new Date(Date.now());
const todaysMonth = now.getMonth();
const todaysYear = now.getFullYear();
const getDateFromNum = (num) => {
  const month = todaysMonth + (num % 12);
  const year =
    todaysMonth > num % 12
      ? todaysYear + Math.ceil(num / 12)
      : todaysYear + Math.floor(num / 12);

  return new Date(year, month);
};

class Debt {
  constructor({ name, amount, minimum, rate, prevDebts, snowball }) {
    this.name = name || "Unnamed Debt";
    this.amount = amount || 0;
    this.minimum = minimum || 0;
    this.rate = rate || 0;
    this.prevDebts = prevDebts || [];
    this.snowball = snowball || false;
    [this.paydown, this.payments] = this.calculatePayments(
      amount,
      minimum,
      rate,
      [{ x: getDateFromNum(0), y: amount }],
      [],
      1,
      prevDebts,
      snowball
    );
    this.paymentsLeft = this.paydown.length;
  }

  roundCents = (num) => {
    return parseFloat(num.toFixed(2));
  };

  calculatePayments = (
    remaining,
    min,
    rate,
    paydown = [],
    payments = [],
    count = 2,
    prevs,
    isSnowball
  ) => {
    if (isNaN(remaining)) {
      return [[], []];
    }
    const interest = remaining * (rate / 100 / 12);

    let payment = min;
    if (isSnowball) {
      for (let prev of prevs) {
        payment += prev.minimum;
        let prevPayment = prev.payments[count - 1] || 0;
        payment -= prevPayment;
      }
    }

    let newRemaining = remaining + interest;
    if (newRemaining <= payment) payment = newRemaining;
    newRemaining -= payment;
    paydown.push({
      x: getDateFromNum(count),
      y: this.roundCents(newRemaining),
    });
    payments.push(this.roundCents(payment));
    if (paydown.length >= 720 || newRemaining <= 0) {
      return [paydown, payments];
    }

    return this.calculatePayments(
      newRemaining,
      min,
      rate,
      paydown,
      payments,
      count + 1,
      prevs,
      isSnowball
    );
  };
}

class Paydown {
  constructor(debts = []) {
    this.debts = debts.sort((a, b) => a.amount - b.amount);
    this.total = debts.reduce((sum, debt) => sum + debt.amount, 0);
    this.remainingPayments = this.getRemainingPayments(debts);
    this.traditionalPaydown = this.getPaydown(debts);
    this.snowballDebts = this.getSnowball(this.debts);
    this.snowballPaydown = this.getPaydown(this.snowballDebts);
    this.snowballSavings = {
      time: this.traditionalPaydown.length - this.snowballPaydown.length,
      money:
        this.calculateTotal(debts) - this.calculateTotal(this.snowballDebts),
    };
  }

  getRemainingPayments = (debtsArr) => {
    const remainingAmounts = [];
    for (let debt of debtsArr) {
      remainingAmounts.push(debt.paymentsLeft);
    }
    return Math.max(...remainingAmounts);
  };

  getPaydown = (debtsArr) => {
    const paydown = [];
    for (let i = 0; i < this.remainingPayments; i++) {
      let currentTotal = 0;
      for (let debt of debtsArr) {
        if (debt.paydown[i] !== undefined) {
          currentTotal += debt.paydown[i].y;
        }
      }
      if (currentTotal === 0 && currentTotal === paydown[i - 1].y) break;
      paydown.push({ x: getDateFromNum(i), y: currentTotal });
    }
    return paydown;
  };

  getSnowball = (sortedDebtsArr) => {
    const snowballDebts = [];
    for (let debt of sortedDebtsArr) {
      const { name, amount, minimum, rate } = debt;
      const newDebt = new Debt({
        name,
        amount,
        minimum,
        rate,
        prevDebts: snowballDebts,
        snowball: true,
      });
      snowballDebts.push(newDebt);
    }
    return snowballDebts;
  };

  calculateTotal = (debtsArr) => {
    let total = 0;
    for (let debt of debtsArr) {
      if (debt.payments.length > 0) {
        total += debt.payments.reduce((sum, payment) => sum + payment);
      }
    }
    return total;
  };
}

const createDebtObjects = (elements) => {
  const debts = [];
  let count = 0;

  const isValidDebt = (debt) => {
    if (debt.name === "Extra Payment") return true;
    return !!debt.amount;
  };

  while (elements[`debt-name-${count}`] !== undefined) {
    let debtData = {
      name: elements[`debt-name-${count}`].value,
      amount: elements[`debt-amount-${count}`].valueAsNumber,
      minimum: elements[`debt-minimum-${count}`].valueAsNumber,
      rate: elements[`debt-rate-${count}`].valueAsNumber,
    };
    if (isValidDebt(debtData)) debts.push(new Debt(debtData));
    count++;
  }
  return debts;
};
