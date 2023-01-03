class Debt {
    constructor({name, amount, minimum, rate}) {
        this.name = name || ""
        this.amount = amount || 0
        this.minimum = minimum || 0
        this.rate = rate || 0
        this.paydown = this.calculatePayments(amount, minimum, rate, [{x: 1, y: amount}])
        this.paymentsLeft = this.paydown.length
    }

    roundCents = (num) => {
        return parseFloat(num.toFixed(2))
    }

    calculatePayments = (remaining, min, rate, payments = [], count = 2) => {
        const interest = remaining * ((rate/100)/12)

        let newRemaining = remaining + interest
        if (payments.length >= 720 ||
            newRemaining < min &&
            newRemaining - min <= 0) {
            return payments
        }

        newRemaining -= min
        payments.push({x: count, y: this.roundCents(newRemaining)})
        return this.calculatePayments(newRemaining, min, rate, payments, count + 1)
    }
}

class Paydown {
    constructor(debts = []) {
        this.debts = debts.sort((a,b) => a.amount - b.amount)
        this.total = debts.reduce((sum, debt) => sum + debt.amount, 0)
        this.remainingPayments = this.getRemainingPayments(debts)
        this.traditionalPaydown = this.getTraditionalPaydown(debts)
    }

    getRemainingPayments = (debtsArr) => {
        const remainingAmounts = []
        for (let debt of debtsArr) {
            remainingAmounts.push(debt.paymentsLeft)
        }
        return Math.max(...remainingAmounts)
    }

    getTraditionalPaydown = (debtsArr) => {
        const paydown = []
        for (let i = 0; i < this.remainingPayments; i++) {
            let currentTotal = 0
            for (let debt of debtsArr) {
                if (debt.paydown[i] !== undefined) {
                    currentTotal += debt.paydown[i].y
                }
            }
            paydown.push({x: i + 1, y: currentTotal})
        }
        return paydown
    }
}