'use strict';

console.log('hey world helllo!');

let visitorName = prompt('What is your name?');

alert(`Welcome to my website ${visitorName}! Please guess yes or no to the following questions`);

let questionOneGuess = prompt('Will you get arrested if caught driving intoxicated?').toUpperCase();

if(questionOneGuess === 'Y' || questionOneGuess === 'YES'){
  alert('You are correct!');
} else if(questionOneGuess === 'N' || questionOneGuess === 'NO'){
  alert('Sorry, you are wrong');
}

let questionTwoGuess = prompt('Is it hot in Texas?').toUpperCase();

if(questionTwoGuess === 'Y' || questionTwoGuess === 'YES'){
  alert('You are correct!');
} else if(questionTwoGuess === 'N' || questionTwoGuess === 'NO'){
  alert('You are incorrect!');
}

let questionThreeGuess = prompt('Does it snow in California?').toUpperCase();

if(questionThreeGuess === 'Y' || questionThreeGuess === 'YES'){
  alert('You are absolutely wrong!');
} else if(questionThreeGuess === 'N' || questionThreeGuess === 'NO'){
  alert('You are correct so smart!');
}

let questionFourGuess = prompt('Can a chicken fly?').toUpperCase();

if(questionFourGuess === 'Y' || questionFourGuess === 'YES'){
  alert('You are totally incorrect!');
} else if(questionFourGuess === 'N' || questionFourGuess === 'NO'){
  alert('Very good that is correct');
}

let questionFiveGuess = prompt('Can a cow swim very well?').toUpperCase();

if(questionFiveGuess === 'Y' || questionFiveGuess === 'YES'){
  alert('That is correct!');
} else if(questionFiveGuess === 'N' || questionFiveGuess === 'NO'){
  alert('You are so wrong!');
}

alert(`Thanks for playing ${visitorName}`);