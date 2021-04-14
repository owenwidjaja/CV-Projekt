var winner = document.getElementById('header');
var id1 = document.getElementById('dice1');
var id2 = document.getElementById('dice2');
var listImage = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png',
];

var randomImage1 = listImage[randomNumber()];
var randomImage2 = listImage[randomNumber()];
var image_1_Position = listImage.indexOf(randomImage1);
var image_2_Position = listImage.indexOf(randomImage2);

//oder id1.src = randomImage1;
id1.setAttribute('src', randomImage1);
id2.setAttribute('src', randomImage2);

if (image_1_Position > image_2_Position) {
  winner.innerHTML = 'Player 1 Wins!';
} else if (image_1_Position < image_2_Position) {
  winner.innerHTML = 'Player 2 Wins!';
} else {
  winner.innerHTML = 'Draw!';
}

function randomNumber() {
  return Math.floor(Math.random() * 6);
}

// shorter version! :)
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
// var randomDiceImage = 'dice' + randomNumber1 + '.png';
// var randomImageSource = 'images/' + randomDiceImage;
// var image1 = document.querySelectorAll('img')[0];
// image1.setAttribute('src', randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber2);
// var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
// document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//   document.querySelector('h1').innerHTML = 'Player 1 Wins!';
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector('h1').innerHTML = 'Player 2 Wins!';
// } else {
//   document.querySelector('h1').innerHTML = 'Draw!';
// }
