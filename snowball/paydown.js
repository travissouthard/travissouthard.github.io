class Debt {
  constructor({ name, amount, minimum, rate, prevDebts, snowball }) {
    this.name = name || "";
    this.amount = amount || 0;
    this.minimum = minimum || 0;
    this.rate = rate || 0;
    this.prevDebts = prevDebts || [];
    this.snowball = snowball || false;
    [this.paydown, this.payments] = this.calculatePayments(
      amount,
      minimum,
      rate,
      [{ x: 1, y: amount }],
      [],
      2,
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
    if (
      paydown.length >= 720 ||
      (newRemaining < payment && newRemaining - payment <= 0)
    ) {
      return [paydown, payments];
    }

    newRemaining -= payment;
    paydown.push({ x: count, y: this.roundCents(newRemaining) });
    payments.push(payment);
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
      if (currentTotal <= 0) break;
      paydown.push({ x: i + 1, y: currentTotal });
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
}
