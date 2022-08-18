let nums = document.querySelectorAll('.num');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let started = false;

function count(el) {
    let gold = el.dataset.gold;
    let time = setInterval(() => {
        el.textContent++;
        el.textContent == gold ? clearInterval(time) : '';
    }, 2000 / gold)
}

window.onscroll = () => {
    if (window.scrollY >= three.offsetTop && !started) {
        nums.forEach((num) => count(num));
        started = true;
    }
}
