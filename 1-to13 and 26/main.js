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

let arr10 = ['ali','osama','gamal','mohammed'];
btn10.onclick=()=>{
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


btn11.onclick=()=>{

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
    ele.addEventListener('click',classAct);
    ele.addEventListener('click',classContent);
});

function classAct(){
    li12.forEach(ele => {
        ele.classList.remove('active');
        
    });
    this.classList.add('active')
}

function classContent (){
    content12.forEach(ele => {
        ele.classList.add('hidden');
    });
    document.querySelectorAll(`.${this.dataset.cat}`).forEach(ele => {
        ele.classList.remove('hidden')
    });
}
// end lesson 12 -------------------------------------------