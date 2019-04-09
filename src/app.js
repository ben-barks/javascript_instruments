const InstrumentFamilies = require('./models/instrument_families.js')
const ResultView = require('./views/result_view.js')
const SelectionView = require('./views/selection_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectionView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-details');
  const resultView = new ResultView(infoDiv);
  resultView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
