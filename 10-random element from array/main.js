let arr = ['ahmed', 'osama', 'ali', 'gamal'];


let btn = document.querySelector('.btn');
let label = document.querySelector('.label');

btn.onclick=()=>{
    let currentNumber = Math.trunc(Math.random() * arr.length);
    label.innerHTML = arr[currentNumber];
}