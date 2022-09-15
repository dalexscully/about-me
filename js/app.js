'use strict';

console.log('hey world helllo!');

let visitorName = prompt('What is your name?');

// let score = 0;

alert(`Welcome to my website ${visitorName}! Please guess yes or no to the following questions`);

function arrested(){
  let questionOneGuess = prompt('Will you get arrested if caught driving intoxicated?').toUpperCase();
  console.log(questionOneGuess);
  if (questionOneGuess === 'Y' || questionOneGuess === 'YES') {
    alert('You are correct!');
  } else if (questionOneGuess === 'N' || questionOneGuess === 'NO') {
    alert('Sorry, you are wrong');
  }
}

arrested();

function texas(){
  let questionTwoGuess = prompt('Is it hot in Texas?').toUpperCase();

  if (questionTwoGuess === 'Y' || questionTwoGuess === 'YES') {
    alert('You are correct!');
  } else if (questionTwoGuess === 'N' || questionTwoGuess === 'NO') {
  alert('You are incorrect!');
  }
}

texas();

let questionThreeGuess = prompt('Does it snow in California?').toUpperCase();

if (questionThreeGuess === 'Y' || questionThreeGuess === 'YES') {
  alert('You are absolutely wrong!');
} else if (questionThreeGuess === 'N' || questionThreeGuess === 'NO') {
  alert('You are correct so smart!');
}

let questionFourGuess = prompt('Can a chicken fly?').toUpperCase();

if (questionFourGuess === 'Y' || questionFourGuess === 'YES') {
  alert('You are totally incorrect!');
} else if (questionFourGuess === 'N' || questionFourGuess === 'NO') {
  alert('Very good that is correct');
}

let questionFiveGuess = prompt('Can a cow swim very well?').toUpperCase();

if (questionFiveGuess === 'Y' || questionFiveGuess === 'YES') {
  alert('That is correct!');
} else if (questionFiveGuess === 'N' || questionFiveGuess === 'NO') {
  alert('You are so wrong!');
}


let myNumGuesses;

let score = 0;
for (myNumGuesses = 0; myNumGuesses < 4; myNumGuesses++) {
  let questionSixGuess = prompt('How many states are in the United States of America?');
  if (questionSixGuess < 50) {
    alert('Too low');
  } else if (questionSixGuess > 50) {
    alert('Too high');
  } else if (questionSixGuess === '50') {
    alert('That is very correct!');
    score++;
    break;
  }
}
if (myNumGuesses >= 4) {
  alert('All attempts have been exhausted! Correct number is 50');
}

let top8caribbeanislands = ['Jamaica', 'Bahamas', 'St Lucia', 'Trinidad and Tobago', 'Saint Vicent and The Grenadines', 'Aruba', 'Barbados', 'Cayman Islands', 'Antigua'];

let totalGuess = 0;
let bool = false;
while (totalGuess < 6 && bool === false) {
  let questionSevenGuess = prompt('What is my top 8 caribbean islands?');

  totalGuess++;
  for (let i = 0; i < top8caribbeanislands.length; i++) {
    console.log(questionSevenGuess, top8caribbeanislands[i]);
    if (questionSevenGuess === top8caribbeanislands[i]) {
      alert('You are totally correct!');
      score++;
      bool = true;
      break;
    }
  }
  if (bool === false) {
    alert('Sorry that is incorrect!');
  }
}

alert(`Thanks for playing ${visitorName}`);

alert(`${score}`);