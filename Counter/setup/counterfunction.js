var valueID = document.getElementById('value');

var increaseID = document.getElementById('increase');
var resetID = document.getElementById('reset');
var decreaseID = document.getElementById('decrease');

var count = 0;

increaseID.addEventListener('click', function () {
  count = count + 1;
  valueID.innerHTML = count;
  if (count > 0) {
    valueID.style.color = 'green';
    console.log(valueID);
  } else if (count === 0) {
    valueID.style.color = 'black';
  }

  console.log('number of click = ' + valueID.innerHTML);
});

resetID.addEventListener('click', function () {
  count = 0;
  valueID.innerHTML = count;
  valueID.style.color = 'black';
  console.log(valueID);
});

decreaseID.addEventListener('click', function () {
  count = count - 1;
  valueID.innerHTML = count;
  if (count < 0) {
    valueID.style.color = 'red';
    console.log(valueID);
  } else if (count === 0) {
    valueID.style.color = 'black';
  }
});
