var count = 0;

const value = document.getElementById('value');

let increaseID = document.getElementsByClassName('btn increase');

console.log(increaseID);
increaseID[0].addEventListener('click', function (e) {
  console.log(e.currentTarget);
});

console.log('object');
