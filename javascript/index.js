const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  let courrentTime = chronometer.split()
  minDecElement.innerHTML = courrentTime[0];
  minUniElement.innerHTML = courrentTime[1];
  secDecElement.innerHTML = courrentTime[3];
  secUniElement.innerHTML = courrentTime[4];
  milDecElement.innerHTML = courrentTime[6];
  milUniElement.innerHTML = courrentTime[7];
}

function printMinutes() {
  
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit = document.createElement("li");
  newSplit.innerHTML = chronometer.split();
  splitsElement.append(newSplit)


}

function clearSplits() {
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  } 
}

function setStopBtn() {
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.className = "btn split";
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.className = "btn start";
  btnLeftElement.innerHTML = "START";
  
}

function setResetBtn() {
  btnRightElement.className = "btn reset";
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  switch (btnLeftElement.className) {
  case 'btn start' :
    setStopBtn();
    chronometer.start(printTime);
    setSplitBtn();
    break;
  case 'btn stop':
    setStartBtn();
    chronometer.stop();
    setResetBtn();
    break;
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  switch (btnRightElement.className) {
    case 'btn reset' :
      chronometer.reset();
      printTime();
      clearSplits();
      break;
    case 'btn split':
      printSplit();
      break;
    }
});
