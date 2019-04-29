const route = 'ID';
function Igloo() {};
const IDPayment = require('./ID');
const SGPayment = require('./SG');
const THPayment = require('./TH');
const payers = {
  'ID': new IDPayment(),
  'SG': new SGPayment(),
  'TH': new THPayment(),
};
Igloo.prototype.payer = payers[route];
module.exports = new Igloo();