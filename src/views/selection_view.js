const PubSub = require('../helpers/pub_sub.js')

const SelectionView = function (element) {
  this.element = element;
};

SelectionView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments: ready', (evt) => {
    const instrumentData = evt.detail;
    this.populate(instrumentData);
  });
  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectionView: change', selectedIndex);
  });
};

SelectionView.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  });
};


module.exports = SelectionView;
