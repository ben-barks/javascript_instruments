const PubSub = require('../helpers/pub_sub.js')

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments: ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

ResultView.prototype.render = function (instrument) {
  const header = document.createElement('h1');
  header.textContent = instrument.name;
  this.container.innerHTML = '';
  this.container.appendChild(header);

  const description = document.createElement('p');
  description.textContent = instrument.description;
  this.container.innerHTML = '';
  this.container.appendChild(description)

  // const instruments = document.createElement('ul')
};

module.exports = ResultView;
