const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments: ready', this.data);
  PubSub.subscribe('SelectionView: change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishDetail = function (index) {
  const selectedInstrument = this.data[index];
  PubSub.publish('Instruments: ready', selectedInstrument)
};

module.exports = InstrumentFamilies;
