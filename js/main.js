var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult = document.querySelector('.result-1');
var elResult2 = document.querySelector('.result-2');
var elResult3 = document.querySelector('.result-3');
var elResult4 = document.querySelector('.result-4');
var elAlert = document.querySelector('.alert');

elForm = addEventListener('submit', function (evt) {
  evt.preventDefault();

  function onfoot(elInputVal, footSpeed) {
    var elInputVal = +elInput.value;
    var footSpeed = 3.6;
    return (elInputVal / footSpeed).toFixed(1) + " Hours";
  }
  elResult.textContent = onfoot();

  function car(elInputVal, carSpeed) {
    var elInputVal = +elInput.value;
    var carSpeed = 70;
    return (elInputVal / carSpeed).toFixed(1) + " Hours";
  }
  elResult2.textContent = car();

  function bike(elInputVal, bikeSpeed) {
    var elInputVal = +elInput.value;
    var bikeSpeed = 20.1;
    return (elInputVal / bikeSpeed).toFixed(1) + " Hours";
  }
  elResult3.textContent = bike();

  function plane(elInputVal, planeSpeed) {
    var elInputVal = +elInput.value;
    var planeSpeed = 800;
    return (elInputVal / planeSpeed).toFixed(1) + " Hours";
  }
  elResult4.textContent = plane();


    if (elInput.value <= 0 || isNaN(elInput.value)) {
      elAlert.textContent = "0 dan baland son kiriting - son kiriting";
      elResult.textContent = 'Null';
      elResult2.textContent = 'Null';
      elResult3.textContent = 'Null';
      elResult4.textContent = 'Null';

    } else {
      elAlert.textContent = "✅";
    }
  
})