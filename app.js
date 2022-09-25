// https://www.omnicalculator.com/health/nnt

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const NNTRadio = document.getElementById('NNTRadio');
const controlgroupRadio = document.getElementById('controlgroupRadio');
const experimentalgroupRadio = document.getElementById('experimentalgroupRadio');

let NNT;
let controlgroup = v1;
let experimentalgroup = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

NNTRadio.addEventListener('click', function() {
  variable1.textContent = 'Control group';
  variable2.textContent = 'Experimental group';
  controlgroup = v1;
  experimentalgroup = v2;
  result.textContent = '';
});

controlgroupRadio.addEventListener('click', function() {
  variable1.textContent = 'NNT';
  variable2.textContent = 'Experimental group';
  NNT = v1;
  experimentalgroup = v2;
  result.textContent = '';
});

experimentalgroupRadio.addEventListener('click', function() {
  variable1.textContent = 'NNT';
  variable2.textContent = 'Control group';
  NNT = v1;
  controlgroup = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(NNTRadio.checked)
    result.textContent = `NNT = ${computeNNT().toFixed(2)}`;

  else if(controlgroupRadio.checked)
    result.textContent = `Control group = ${computecontrolgroup().toFixed(2)}`;

  else if(experimentalgroupRadio.checked)
    result.textContent = `Experimental group = ${computeexperimentalgroup().toFixed(2)}`;
})

// calculation

// NNT = 1 / (controlgroup - experimentalgroup)

function computeNNT() {
  return (1 / (Number(controlgroup.value) - Number(experimentalgroup.value))) * 100;
}

function computecontrolgroup() {
  return (1 / (Number(NNT.value) / 100)) + Number(experimentalgroup.value);
}

function computeexperimentalgroup() {
  return Number(controlgroup.value) - (1 / (Number(NNT.value) / 100));
}