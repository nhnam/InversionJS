class ID {

  async doIt() {
    console.log('ID.doIt');
    console.log('ID.do Another thing');
    const randomThing = this.doInternalJob(() => {});
  }

  async doInternalJob(callback) {
    console.log('ID. I do some thing without touching SG logic');
    callback(true);
  }
}

module.exports = ID;
