const app = require('./app');

class A {
  constructor(o) {
    this.o = o;
  }

  async checkout() {
    await this.o.doIt();
  }
}

const payerDependency = app.payer;
const a = new A(payerDependency);
a.checkout();
