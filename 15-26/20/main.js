
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

// console.log((endTime - currentTime)/(1000*60*60*24));

let count = setInterval(() => {
    let currentTime = new Date().getTime();
    let endTime = new Date('dec 31 2022, 23:59:59');
    let diffrentTime = endTime - currentTime;

    let days = Math.trunc(diffrentTime / (1000*60*60*24));
    let hours = Math.trunc((diffrentTime % (1000*60*60*24)) /(1000*60*60));
    let minutes = Math.trunc((diffrentTime % (1000*60*60)) /(1000*60));
    let seconds = Math.trunc((diffrentTime % (1000*60)) /(1000));
    console.log(seconds);

    document.querySelector('.days').textContent = days;
    document.querySelector('.hours').textContent =hours;
    document.querySelector('.minutes').textContent =minutes;
    document.querySelector('.seconds').textContent =seconds;
    
}, 1000);