// Array Of Words
const words = [
  // "Hello",
  // "Programming",
  // "Code",
  // "Javascript",
  // "Town",
  // "Country",
  // "Testing",
  // "Youtube",
  // "Linkedin",
  // "Twitter",
  // "Github",
  // "Leetcode",
  // "Internet",
  // "Python",
  // "Scala",
  // "Destructuring",
  // "Paradigm",
  // "Styling",
  // "Cascade",
  // "Documentation",
  // "Coding",
  // "Funny",
  // "Working",
  // "Dependencies",
  // "Task",
  // "Runner",
  "Roles",
  "Test",
  "Rust",
  // "Playing"
];

// Setting Levels
const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2
};

// Default Level
let defaultLevelName = "Normal"; // Change Level From Here
let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disble the paste in input field
input.onpaste = function () {
  return false;
}

startButton.onclick = () => {
  // startButton.remove();
  input.focus();
  generate();
}

function generate() {

  input.value = '';
  // chose random word from the words array
  let random = words[Math.trunc(Math.random() * words.length)];
  let indexRandom = words.indexOf(random);

  // show the random word in input field
  theWord.innerHTML = random;

  // delete the random word from the words array
  words.splice(indexRandom, 1);

  // show the rest words in the upcaming words field
  upcomingWords.innerHTML = '';
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement('div');
    let divText = document.createTextNode(words[i]);
    div.append(divText);
    upcomingWords.append(div);
  }

  checkTime(random);

}

function checkTime(random) {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  realTime = setInterval(function () {
    timeLeftSpan.innerHTML--;
    let x = parseInt(timeLeftSpan.innerHTML);
    console.log(x);
    if (x == 0) {
      clearInterval(realTime);
      if (input.value.toLowerCase() === random.toLowerCase()) {
        scoreGot.innerHTML++;
        if (words.length > 0) {
          generate();
        } else {
          let span = document.createElement('span');
          span.classList.add('good');
          let spanText = document.createTextNode('good jop');
          span.append(spanText);

          let btn = document.createElement('button');
          btn.classList.add('agien');
          let btnText =document.createTextNode('play agien');
          btn.append(btnText);
          span.append(btn);
          finishMessage.append(span);
          finishMessage.classList.add('cover');
        }
      } else {
        let span = document.createElement('span');
        span.classList.add('bad');
        let spanText = document.createTextNode('game over');
        span.append(spanText);

        let btn = document.createElement('button');
        btn.classList.add('agien');
        let btnText =document.createTextNode('play agien');
        btn.append(btnText);
        span.append(btn);
        finishMessage.append(span);
        finishMessage.classList.add('cover');

      }
    }
  }, 1000)
}

document.addEventListener('click',function(el){
  if(el.target.classList.contains('agien')){
    location.reload();
    console.log(2);
  }
})