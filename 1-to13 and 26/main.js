// start lesson 8 -------------------------------------------

let btn8 = document.querySelector('.part8 button');
window.onscroll = () => {
    window.scrollY >= 700 ?
        btn8.classList.add('show') :
        btn8.classList.remove('show');
}
btn8.onclick = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}
// end lesson 8 -------------------------------------------

// start lesson 9 -------------------------------------------

let li9 = document.querySelectorAll('.part9 .tabs li');
let content9 = document.querySelectorAll('.part9 .content div');
li9.forEach(ele => {
    ele.addEventListener('click', function () {
        li9.forEach(ele => {
            ele.classList.remove('active');
        });
        ele.classList.add('active');

        content9.forEach(ele => {
            ele.style.display = 'none'
        });
        document.querySelector(`.${ele.dataset.text}`).style.display = 'block';

    })
});

// end lesson 9 -------------------------------------------

// start lesson 10 -------------------------------------------

let btn10 = document.querySelector('.part10 >div .btn10');
let lbl10 = document.querySelector('.part10 >div .lbl10');

let arr10 = ['ali', 'osama', 'gamal', 'mohammed'];
btn10.onclick = () => {
    let rand10 = Math.trunc(Math.random() * arr10.length);
    lbl10.innerHTML = arr10[rand10];
}

// end lesson 10 -------------------------------------------

// start lesson 11 -------------------------------------------

let btn11 = document.querySelector('.part11 >div .btn11');
let lbl11 = document.querySelector('.part11 >div .lbl11');
let charPass11 = '1234567890abcdefghijklmnopqrstwxyz';
let count11 = 5
let rand11;


btn11.onclick = () => {

    let password11 = '';
    for (let i = 0; i < count11; i++) {
        rand11 = Math.trunc(Math.random() * charPass11.length);
        password11 += charPass11[rand11];
    }
    lbl11.innerHTML = password11;
}

// end lesson 11 -------------------------------------------

// start lesson 12 -------------------------------------------

let li12 = document.querySelectorAll('.part12 .tabs li');
let content12 = document.querySelectorAll('.part12 .content>div');

content12.forEach(ele => {
    ele.style.background = ele.dataset.color;
});

li12.forEach(ele => {
    ele.addEventListener('click', classAct);
    ele.addEventListener('click', classContent);
});

function classAct() {
    li12.forEach(ele => {
        ele.classList.remove('active');

    });
    this.classList.add('active')
}

function classContent() {
    content12.forEach(ele => {
        ele.classList.add('hidden');
    });
    document.querySelectorAll(`.${this.dataset.cat}`).forEach(ele => {
        ele.classList.remove('hidden')
    });
}
// end lesson 12 -------------------------------------------

// start lesson 14 -------------------------------------------

const words14 = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

window.localStorage.topScore?'':window.localStorage.topScore=0;

let nameLvl14 = document.querySelector('.nameLvl14');
let secondsLvl14 = document.querySelector('.secondsLvl14');
let start14 = document.querySelector('.start14');
let realWord = document.querySelector('.realWord');
let input14 = document.querySelector('.input14');
let allWords14 = document.querySelector('.allWords14');
let total14 = document.querySelector('.total14');
let timeLeft14 = document.querySelector('.timeLeft14');
let currentScore14 = document.querySelector('.currentScore14');
let totalScore14 = document.querySelector('.totalScore14');
let finish = document.querySelector('.finish');

let defultLevel14 = 'normal';

let obLevel14 = {
    'easy': 5,
    'normal': 3,
    hard: 2
}

defult14()
totalScore14.innerHTML = words14.length;
currentScore14.innerHTML = 0

// to set current level [easy -- normal -- hard]
function defult14() {
    nameLvl14.innerHTML = defultLevel14;
    secondsLvl14.innerHTML = obLevel14[`${nameLvl14.innerHTML}`];
    timeLeft14.innerHTML = secondsLvl14.innerHTML;
}

let chose14 = document.querySelectorAll('#start-and-level label');

chose14.forEach(ele => {
    ele.addEventListener('click', function () {
        defultLevel14 = ele.dataset.text;
        defult14();

        // to remove active class from all choses
        chose14.forEach(ele => {
            ele.classList.remove('active');
        });

        // add active class to current selection
        ele.classList.add('active');

    })
});


input14.onpaste = () => {
    return false;
}
start14.onclick = () => {
    start14.parentElement.remove();
    generate14();
}

function generate14() {
    defult14()
    input14.value = '';
    input14.focus();
    allWords14.innerHTML = '';
    let rand14 = Math.trunc(Math.random() * words14.length);
    let current14 = words14.splice(rand14, 1);
    current14 = current14.join();
    realWord.innerHTML = current14;
    for (let i = 0; i < words14.length; i++) {
        let div = document.createElement('div');
        let divTxt = document.createTextNode(words14[i]);
        div.append(divTxt);
        allWords14.append(div);
    }
    ;
    // cal time function
    time(current14);
}

function time(current14) {
    let currentTimeLeve14 = setInterval(function () {
        timeLeft14.innerHTML--;
        checkTime(current14, currentTimeLeve14);
    }, 1000)

    // call checkTime function
}

function checkTime(current14, currentTimeLeve14) {
    if (timeLeft14.innerHTML > 0 && input14.value.toLowerCase() == current14.toLowerCase()) {
        currentScore14.innerHTML++;
        if(window.localStorage.topScore){
            window.localStorage.topScore >= currentScore14.innerHTML?'':
            window.localStorage.topScore = currentScore14.innerHTML;
        }
        if (words14.length > 0) {
            clearInterval(currentTimeLeve14);
            generate14();
        } else {
            clearInterval(currentTimeLeve14);
            let span = document.createElement('span');
            span.classList.add('good');
            let spanText = document.createTextNode('good jop');
            span.append(spanText);

            let btn = document.createElement('button');
            btn.classList.add('agien');
            let btnText = document.createTextNode('play agien');
            btn.append(btnText);
            span.append(btn);
            finish.append(span);
            finish.classList.add('cover');
        }
    } else if (timeLeft14.innerHTML == 0) {
        clearInterval(currentTimeLeve14);
        let span = document.createElement('span');
        span.classList.add('bad');
        let spanText = document.createTextNode('game over');
        let scoreText1 = document.createTextNode(` your score is : ${currentScore14.innerHTML} ` );
        let scoreText2 = document.createTextNode(` Top score is :  ${window.localStorage.topScore} ` );
        let br = document.createElement('br');
        let br1 = document.createElement('br');
        span.append(spanText);
        span.append(br);
        span.append(scoreText1);
        span.append(br1);
        span.append(scoreText2);
        let btn = document.createElement('button');
        btn.classList.add('agien');
        let btnText = document.createTextNode('play agien');
        btn.append(btnText);
        span.append(btn);
        finish.append(span);
        finish.classList.add('cover');
    }
}

document.addEventListener('click', function (el) {
    if (el.target.classList.contains('agien')) {
        location.reload();
        console.log(2);
    }
})

// end lesson 14 -------------------------------------------